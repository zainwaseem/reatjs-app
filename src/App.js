import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Zaid Github Actions</p>
        <h1>Student Info</h1>
        <p>
          <strong>Name:</strong> {process.env.REACT_APP_NAME}
        </p>
        <p>
          <strong>Roll Number:</strong> {process.env.REACT_APP_ROLL_NUMBER}
        </p>
        <p>
          <strong>Class:</strong> {process.env.REACT_APP_CLASS}
        </p>
        <p>
          <strong>About Me:</strong> {process.env.REACT_APP_BIO}
        </p>
      </header>
    </div>
  );
}

export default App;
