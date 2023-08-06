import React from 'react';

function Categories({ categories }) {
    const [activeCategory, setActiveCategory] = React.useState(0);

    const onClickCategory = index => {
        setActiveCategory(index);
    };

    return (
        <div className="categories">
            <ul>
                {categories &&
                    categories.map((category, index) => (
                        <li
                            onClick={() => onClickCategory(index)}
                            className={activeCategory === index ? 'active' : ''}
                            key={category + index}
                        >
                            {category}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;
