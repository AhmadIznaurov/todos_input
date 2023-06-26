import * as React from 'react';
import { Todo } from "./Todo";


export const Todos = ({todos, makeFavorite, deleteTodo}) => {
    return (
        todos.map((todo, index)  => {
            return (
                <Todo
                    todo={todo}
                    index={index}
                    makeFavorite={makeFavorite}
                    deleteTodo={deleteTodo}

                />
            )
        })
    );
}