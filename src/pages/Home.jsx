import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home({ searchValue, setSearchValue }) {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeCategory, setActiveCategory] = React.useState(0);
    const [activeSort, setActiveSort] = React.useState({
        name: 'популярности',
        property: 'rating',
    });

    React.useEffect(() => {
        setIsLoading(true);

        const sortBy = activeSort.property.replace('-', '');
        const order = activeSort.property.includes('-') ? 'desc' : 'asc';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const search = searchValue ? `name=${searchValue}` : '';

        fetch(`https://64cf3019ffcda80aff51ab33.mockapi.io/pizzas?${category}${search}&sortBy=${sortBy}&order=${order}`)
            .then(response => response.json())
            .then(data => {
                setPizzas(data);
                console.log(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [activeCategory, activeSort, searchValue]);

    return (
        <React.Fragment>
            <div className="content__top">
                <Categories
                    value={activeCategory}
                    onClickCategory={index => setActiveCategory(index)}
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
                    ? [...new Array(9)].map((_, index) => <Skeleton className="pizza-block" key={index} />)
                    : pizzas.map(pizza => (
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
        </React.Fragment>
    );
}

export default Home;
