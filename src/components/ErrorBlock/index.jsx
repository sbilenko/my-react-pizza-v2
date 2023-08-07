import React from 'react';

import styles from './ErrorBlock.module.scss';

function ErrorBlock() {
    return (
        <div className={styles.main}>
            <h1>{'Нічого не знайдено :('}</h1>
            <p>Такої сторінки в нашому магазині не існує</p>
        </div>
    );
}

export default ErrorBlock;
