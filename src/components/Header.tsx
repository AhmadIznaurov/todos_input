import React from 'react';
import styles from '../styles/header.module.scss';


export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>Список дел</h1>
            <hr/>
        </header>
    );
}

