import { useState } from 'react'

import './App.css'
import Fetch from './Fetch.jsx'
import Card from './Card.jsx'
function App() {
  const [chars, setChars] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <h1>Bobs Burgers</h1>
      <h2>Score: {score}</h2>
      <h3>High Score: {highScore}</h3>
      <p>{selected.map(id => <span key={id}>{id}, </span>)}</p>
      <Fetch setChars={setChars}/>
      <div className="container">
        <Card 
        chars={chars} 
        setChars={setChars} 
        score={score} 
        setScore={setScore}
        selected={selected}
        setSelected={setSelected}
        highScore={highScore}
        setHighScore={setHighScore}
        />
      </div>
    </>
  )
}

export default App
