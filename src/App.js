import './index.css';
import { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { Todos } from "./Todos";

export const App = () => {

  const [text, setText] = useState('');
  const [check, setCheck] = useState(false);


  const handleCheck = () => {
    setCheck(!check)
  }
  return (
      <div className="App">
        <Header />
        <Forms
            text={text}
            setText={setText}
            setCheck={setCheck}
            check={check}
        />
        <input type="checkbox" checked={check} onChange={() => handleCheck()}/>
        <span>Дело отмечено</span>
        <Todos

        />
      </div>
  );
}

// I need to resolve GitHub conflicts between files