import Board from './components/Board.js';
import Keyboard from './components/Keyboard.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav> 
        <h1> this is where the nav goes...</h1>
      </nav>  
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
