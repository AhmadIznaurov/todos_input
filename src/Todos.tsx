import * as React from 'react';
import { Todo } from "./Todo";

interface TodosProps  {
   todos: Array<{
       favorite: boolean
       text: string
       done: boolean
   }>
    makeFavorite: (a: number) => void
    deleteTodo:   (b: number) => void
}

export const Todos: React.FC<TodosProps> = ({todos, makeFavorite, deleteTodo}) => {
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