import logo from './Earth.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Earth" alt="logo" />
        <div className="ysu">
          <p className="App-title">
            Yes, Speak Up!
          </p>
        </div>
        <div className="App-subtitle">
          <p>‘Hello, World!’ across the world</p>
        </div>
        <div className="instr-backgrnd">
          <p className="App-instructions">Click SPACE to begin</p>
        </div>
      </header>
    </div>
  );
}

export default App;
