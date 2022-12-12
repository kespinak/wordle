import Board from './components/Board.js';
import Keyboard from './components/Keyboard.js';
import './App.css';
import { createContext, useState } from 'react';
import { boardDefault } from './components/Words.js';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <nav> 
        <h1> this is where the nav goes...</h1>
      </nav>  
      <AppContext.Provider value={{board, setBoard}} >
        <div className='game' >
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
