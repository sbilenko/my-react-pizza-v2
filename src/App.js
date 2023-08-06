import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        fetch('https://64cf3019ffcda80aff51ab33.mockapi.io/pizzas')
            .then(response => response.json())
            .then(data => setPizzas(data));
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories categories={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                        <Sort categories={['популярности', 'цене', 'алфавиту']} />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map(item => (
                            <PizzaBlock
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                types={item.types}
                                sizes={item.sizes}
                                key={item + item.name}
                            />
                        ))}
                        {/* {pizzas.map((item) => (  
                            <PizzaBlock {...item} key={item + item.name}/>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
