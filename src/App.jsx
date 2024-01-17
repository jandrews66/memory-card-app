import { useState } from 'react'

import './App.css'
import {Fetch} from './Fetch.jsx'
import {FetchBurg} from './Fetch.jsx'
import Card from './Card.jsx'

function App() {
  const [chars, setChars] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [burg, setBurg] = useState([]);

  return (
    <>
      <h1>Bobs Burgers Memory Game</h1>
      <h2>Score: {score}</h2>
      <h3>High Score: {highScore}</h3>
      <p>{burg.name} {burg.price}</p>
      <Fetch 
      setChars={setChars}
      />
      <FetchBurg 
        setBurg={setBurg}
      />
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
