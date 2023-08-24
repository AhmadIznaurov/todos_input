import React from 'react';


interface FormProps  {
    text: string,
    setText: (value: string) =>  void
    addTodo: () => void
}

export const Forms: React.FC<FormProps> = ({text, setText, addTodo}) => {

    return (
        <div className="forms">
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
