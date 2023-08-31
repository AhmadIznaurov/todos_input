import * as React from 'react';
import { Todo } from "./Todo";

interface TodosType {
    todos: Array<{
        favorite: boolean
        text: string
        done: boolean
    }>
    makeFavorite: (makeFavor: number) => void
    deleteTodo:   (delTodo: number) => void
}

export const Todos: React.FC<TodosType> = ({todos, makeFavorite, deleteTodo}) => {
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