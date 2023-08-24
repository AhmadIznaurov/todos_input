import React, { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { Todos } from "./Todos";


export const App: React.FC = () => {

  interface StateTodos  {
   favorite: boolean
   text: string
   done: boolean
  }

  const [todos, setTodos] = useState<Array<StateTodos>>([
    {favorite: false, text: 'Купиты продукты', done: true},
    {favorite: true, text: 'Купиты бананы', done: false},
    {favorite: false, text: 'Купиты машину', done: false},
    {favorite: true, text: 'Купиты дом', done: false},
    {favorite: false, text: 'Купиты участок', done: false}
  ])

  const [text, setText] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);

  const deleteTodo = (indexOfDelete: number): void => {
    const filterTodo = todos.filter((todo, index: number): boolean => {
      if (index === indexOfDelete) {
        return false
      }
      return true
    })
    setTodos(filterTodo)
  }

  const makeFavorite = (indexOfFavotite: number): void => {
    const newTodos = todos.map((item, index: number): StateTodos => {
      if (index === indexOfFavotite) {
        return {
          ...item,
          favorite: !item.favorite
        }
      }
      return item;
    })
    setTodos(newTodos);
  }


  const addTodo = (): void => {
    setTodos([{ text: text, favorite: false, done: check }, ...todos]);
    setText('');
    setCheck(false);
  }


  const handleCheck = (): void => {
    setCheck(!check)
  }
  return (
      <div className="App">
        <Header />
        <Forms
            text={text}
            setText={setText}
            addTodo={addTodo}
        />
        <input type="checkbox" checked={check} onChange={() => handleCheck()}/>
        <span>Дело отмечено</span>
        <Todos
            todos={todos}
            makeFavorite={makeFavorite}
            deleteTodo={deleteTodo}
        />
      </div>
  );
}




