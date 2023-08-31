import React from 'react';
import styles from '../../styles/forms.module.scss';

interface FormsTypes {
    text: string
    setText: (value: string) =>  void
    addTodo: () => void
}

export const Forms: React.FC<FormsTypes> = ({text, setText, addTodo}) => {
    return (
        <div className={styles.forms}>
            <input
                type="text"
                placeholder="Введите ваш техт..."
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
            <button onClick={addTodo}>Добавить</button>
        </div>
    );
}
