import React from 'react';
import { deleteTodo, makeFavorite } from '../redux/TodoSlice'
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import '../styles/todos.scss'

interface TodoProps {
    todo: {
        favorite: boolean
        done: boolean
        text: string
    }
    index: number
}

export const Todo: React.FC<TodoProps> = ({todo, index}) => {

    const dispatch = useTypedDispatch()

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

