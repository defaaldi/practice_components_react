import { useState } from 'react';
import './App.css';

import { MyChild } from './components/MyChild';

function App() {
  const [name, setName] = useState("Deivis Fabricio Alvarez Diaz");

  return (
    <div className="App">
      <header className="App-header">
        <hr className="white-hr" />
        <MyChild name={name} setName={setName} />
        <hr className="white-hr" />
      </header>
    </div>
  );
}
export default App;
