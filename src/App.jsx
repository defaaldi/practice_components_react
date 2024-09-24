import { useState } from "react";
import "./App.css";

import { MyChild } from "./components/MyChild";
import { MyFourthComponent } from "./components/MyFourthComponent";

function App() {
  const [name, setName] = useState("Deivis Fabricio Alvarez Diaz");

  return (
    <div className="App">
      <header className="App-header">
        <hr className="white-hr" />
        <MyFourthComponent />
        <hr className="white-hr" />
        <MyChild name={name} setName={setName} />
        <hr className="white-hr" />
      </header>
    </div>
  );
}
export default App;
