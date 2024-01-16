export default function Card({chars}){
    
    const shuffle = (array) => { 
        return array.sort(() => Math.random() - 0.5); 
    }; 
    const shuffled = shuffle(chars);

    const charCards = shuffled.map(char => 
        <div className="card" key={char.id}>
            <img src={char.image} alt={char.title} width={100}></img>
            <p>{char.name}</p>
        </div>
        )
    return <div className="container">{charCards}</div>
}