import './index.css';
import { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { Todos } from "./Todos";


function App() {

  const [todos, setTodos] = useState([
    {favorite: false, text: 'Купиты продукты', done: true}, // add a new item (done: true) which work with first element in object
    {favorite: true, text: 'Купиты бананы', done: false},
    {favorite: false, text: 'Купиты машину', done: false},
    {favorite: true, text: 'Купиты дом', done: false},
    {favorite: false, text: 'Купиты участок', done: false}
  ])

  const [text, setText] = useState('');
  const [check, setCheck] = useState(false); // this hook for changing some logic in function

  const deleteTodo = (indexOfDelete) => {
    const filterTodo = todos.filter((todo, index) => {
      if (index === indexOfDelete) {
        return false
      }
      return true
    })
    setTodos(filterTodo)
  }

  const makeFavorite = (indexOfFavotite) => {
    const newTodos = todos.map((item, index) => {
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
  const addTodo = (e) => {
    e.preventDefault();
    const noCopy = todos.find(todo => todo.text === text);
    if (!noCopy) {
      setTodos([{ text: text, favorite: false, done: check }, ...todos]);
    }
    setText('');
    setCheck(false); // code which change false to true
  }

  const handleCheck = () => {  // the basic function changing
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



export default App;
