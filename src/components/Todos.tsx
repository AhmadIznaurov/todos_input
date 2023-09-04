import * as React from 'react';
import { Todo } from "./Todo";
import {useTypedSelector} from "../hooks/useTypedSelector";



export const Todos: React.FC = () => {
  const todos = useTypedSelector((state) => state.todo.todos)
    return (
       <>
           {
               todos.map((todo, index)  => {
                   return (
                       <Todo
                           todo={todo}
                           index={index}
                           key={index}
                       />
                   )
           })

        }

       </>
    );
}