import logo from "./logo.svg";
import "./App.css";
import Card from "./components/UI/Card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card>
          <h1 style={{ backgroundColor: "black" }}>Hola</h1>
        </Card>
      </header>
    </div>
  );
}

export default App;
