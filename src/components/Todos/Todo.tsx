import React from 'react';
import styles from '../../styles/todos.module.scss';

interface TodoType {
    todo: {
    favorite: boolean
    text: string
    done: boolean
}
    makeFavorite: (makeFavor: number) => void
    deleteTodo:   (delTodo: number) => void
    index: number
}

export const Todo: React.FC<TodoType> = ({todo, deleteTodo, index, makeFavorite}) => {
    return (
        <div className='todos'>
            <div className={`${styles.todo} todo ${todo.favorite ? `${styles.selected}` : ''}`}>
                <div className={styles.favorite}>
                    <button onClick={ () => makeFavorite(index)}>
                        ★
                    </button>
                    <input type="checkbox" checked={todo.done} />
                </div>
                <div className={styles.todo_text}>
                    {todo.text}
                </div>
                <div className={styles.actions}>
                    <button onClick={ () => deleteTodo(index)}>&#10005;</button>
                </div>
            </div>
        </div>
    )
}

