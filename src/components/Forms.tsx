import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';
import styles from '../styles/forms.module.scss';

interface FormsType {
    text: string
    setText:  (value: string ) => void
    setCheck: (value: boolean ) => void
    check:   boolean
}

export const Forms: React.FC<FormsType> = ({text, setText, setCheck, check}) => {

  const dispatch = useDispatch()
    return (
        <div className={styles.forms}>
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
