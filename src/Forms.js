import React from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/TodoSlice'

export const Forms = ({text, setText, setCheck, check}) => {

  const dispatch = useDispatch()
    return (
        <div className="forms">
            <input
                type="text"
                placeholder="Введите ваш техт..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => dispatch(addTodo({text: text, check: check, setText: setText, setCheck: setCheck}))}>Добавить</button>
        </div>
    );
}
