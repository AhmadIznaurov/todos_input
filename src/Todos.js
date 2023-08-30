import * as React from 'react';
import { Todo } from "./Todo";
import { useSelector } from 'react-redux'


export const Todos = () => {
  const todos = useSelector((state) => state.todo.todos)
    return (
        todos.map((todo, index)  => {
            return (
                <Todo
                    todo={todo}
                    index={index}
                    key={index}
                />
            )
        })
    );
}