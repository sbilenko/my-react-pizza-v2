import React from 'react';

function Categories({ value, onClickCategory, categories }) {

    return (
        <div className="categories">
            <ul>
                {categories &&
                    categories.map((categoryName, index) => (
                        <li
                            onClick={() => onClickCategory(index)}
                            className={value === index ? 'active' : ''}
                            key={categoryName + index}
                        >
                            {categoryName}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;
