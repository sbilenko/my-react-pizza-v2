import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://64cf3019ffcda80aff51ab33.mockapi.io/pizzas')
            .then(response => response.json())
            .then(data => {
                setPizzas(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <React.Fragment>
            <div className="content__top">
                <Categories categories={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort categories={['популярности', 'цене', 'алфавиту']} />
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
