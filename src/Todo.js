import React from 'react';

export const Todo = ({todo, deleteTodo, index, makeFavorite}) => {
    return (
        <div className="todos">
            <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
                <div className="favorite">
                    <button onClick={ () => makeFavorite(index)}>
                        ★
                    </button>
                    <input type="checkbox" checked={todo.done} />
                </div>
                <div className="todo_text">
                    {todo.text}
                </div>
                <div className="actions">
                    <button onClick={ () => deleteTodo(index)}>&#10005;</button>
                </div>
            </div>
        </div>
    )
}

