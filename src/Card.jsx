import { useState } from 'react'

export default function Card({chars, setChars, score, setScore, selected, setSelected, highScore, setHighScore}){
    

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
 
    }

    return (
        chars.map(char => 
            <div className="card" key={char.id} onClick={ () => handleClick(char.id)}>
                <img src={char.image} alt={char.title} width={100}></img>
                <p>{char.name}</p>
            </div>
        )
    )
}