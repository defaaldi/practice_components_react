import "./App.css";
import { MyFirstComponent } from "./components/MyFirstComponent";
import { MySecondComponent } from "./components/MySecondComponent";
import { MyThirdComponent } from "./components/MyThirdComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className="white-hr" />
        <MyFirstComponent />
        <hr className="white-hr" />
        <MySecondComponent />
        <hr className="white-hr" />
        <MyThirdComponent 
          name="Deivis" 
          last_name="Álvarez"
          edad = "41" />
        <hr className="white-hr" />
      </header>
    </div>
  );
}
export default App;
