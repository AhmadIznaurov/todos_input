import '../index.css';
import React, { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { Todos } from "./Todos";

export const App: React.FC= () => {

  const [text, setText] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);


  const handleCheck = (): void => {
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
