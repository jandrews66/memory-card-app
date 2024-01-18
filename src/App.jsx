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

  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

function handleClick(id){
    setChars(shuffle([...chars]))
    if (selected.find((card) => card == id)){
        console.log("game over")
        if (score > highScore){
            setHighScore(score)
        }
        setScore(0)
        setSelected([])
    } else {
        setScore(score + 1)
        setSelected([...selected, id])
    }
    setRanNum(Math.floor(Math.random() * 9) + 1)

}
const [ranNum, setRanNum] = useState(Math.floor(Math.random() * 9) + 1)



  return (
    <>
      <h1>Bobs Burgers Memory Game</h1>
      <div className="header">
        <div className="scores">
          <h2>Score: {score}</h2>
          <h3>High Score: {highScore}</h3>
        </div>
        <div className="burgerDay">
          <p>Burger Of The Day</p>
          <p>{burg.name}</p>
          <p>{burg.price}</p>
        </div>
      </div>
      <Fetch 
      setChars={setChars}
      />
      <FetchBurg 
        setBurg={setBurg}
        ranNum={ranNum}
      />
      <div className="container">
        <Card 
        chars={chars} 
        handleClick={handleClick}
        />
      </div>
    </>
  )
}

export default App
