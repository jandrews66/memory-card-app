
export default function Card({chars, handleClick}){
    

    return (
        chars.map(char => 
            <div className="card" key={char.id} onClick={ () => handleClick(char.id)}>
                <img src={char.image} alt={char.title} width={100}></img>
                <p>{char.name}</p>
            </div>
        )
    )
}