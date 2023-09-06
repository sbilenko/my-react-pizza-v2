import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setGategoryId } from '../redux/slices/filterSlice'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

function Home() {
    const dispatch = useDispatch();
    const categoryId = useSelector(state => state.filter.categoryId)
    const { searchValue } = React.useContext(SearchContext);
    const [pizzas, setPizzas] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true);
    // const [categoryId, setCategoryId] = React.useState(0);
    const [activeSort, setActiveSort] = React.useState({
        name: 'популярности',
        property: 'rating', 
    });

    const onClickCategory = (id) => {
        dispatch(setGategoryId(id));
    }

    React.useEffect(() => {
        setIsLoading(true);

        const sortBy = activeSort.property.replace('-', '');
        const order = activeSort.property.includes('-') ? 'desc' : 'asc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue.toLowerCase() ? `&name=${searchValue.toLowerCase()}` : '';
        
        fetch(
            `https://64cf3019ffcda80aff51ab33.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
        )
            .then(response => response.json())
            .then(data => {
                setPizzas(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, activeSort, searchValue, currentPage]);

    const addSkeletons = [...new Array(4)].map((_, index) => <Skeleton className="pizza-block" key={index} />);
    // const addStaticFilteredPizzas = pizzas.filter(pizza =>
    //     pizza.name.toLowerCase().includes(searchValue.toLowerCase())
    // );

    return (
        <React.Fragment>
            <div className="content__top">
                <Categories 
                    value={categoryId}
                    onClickCategory={onClickCategory}
                    categories={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                />
                <Sort
                    value={activeSort}
                    onClickSort={prop => setActiveSort(prop)}
                    categories={[
                        { name: 'популярности (ASC)', property: 'rating' },
                        { name: 'популярности (DESC)', property: '-rating' },
                        { name: 'цене (ASC)', property: 'price' },
                        { name: 'цене (DESC)', property: '-price' },
                        { name: 'алфавиту (ASC)', property: 'name' },
                        { name: 'алфавиту (DESC)', property: '-name' },
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? addSkeletons
                    : // addStaticFilteredPizzas
                      pizzas.map(pizza => (
                          <PizzaBlock
                              id={pizza.id}
                              name={pizza.name}
                              price={pizza.price}
                              imageUrl={pizza.imageUrl}
                              types={pizza.types}
                              sizes={pizza.sizes}
                              key={pizza + pizza.name}
                          />
                      ))}
                {/* {pizzas.map((pizza) => (  
                            <PizzaBlock {...pizza} key={pizza + pizza.name}/>
                        ))} */}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </React.Fragment>
    );
}

export default Home;
