import logo from "./logo.svg";
import "./App.css";

//https://circleci.com/blog/continuous-integration-with-code-climates-automated-code-review/
//https://www.freecodecamp.org/news/how-to-set-up-continuous-integration-and-deployment-for-your-react-app-d09ae4525250/
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
      </header>
    </div>
  );
}

export default App;
