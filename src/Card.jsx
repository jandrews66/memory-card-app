export default function Card({chars, setChars}){
    
    const shuffle = (array) => { 
        return array.sort(() => Math.random() - 0.5); 
    }; 

    function handleClick(){
        setChars(shuffle([...chars]))
    }

    return (
        chars.map(char => 
            <div className="card" key={char.id} onClick={handleClick}>
                <img src={char.image} alt={char.title} width={100}></img>
                <p>{char.name}</p>
            </div>
        )
    )
}