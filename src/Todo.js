import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteTodo, makeFavorite } from './redux/TodoSlice'

export const Todo = ({todo, index}) => {

    const dispatch = useDispatch()

    return (
        <div className="todos">
            <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
                <div className="favorite">
                    <button onClick={ () => dispatch(makeFavorite({index: index}))}>
                        ★
                    </button>
                    <input type="checkbox" checked={todo.done} />
                </div>
                <div className="todo_text">
                    {todo.text}
                </div>
                <div className="actions">
                    <button onClick={ () => dispatch(deleteTodo({index: index}))}>&#10005;</button>
                </div>
            </div>
        </div>
    )
}

