import React from 'react';
import styles from './styles.module.css';
import Skeleton from '../skeleton';

function CategoriesLoading() {
    return (
        <div className={styles.categories}>
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Skeleton key={index} height={72} />
                ))}
        </div>
    );
}

export default CategoriesLoading;