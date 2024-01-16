import { useState, useEffect } from 'react';

const Fetch = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bobsburgers-api.herokuapp.com/characters/51,167,280,275,467,457,227,317,155,18,410,391');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setChars(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {chars.map((char) => (
        <>
        <img key={char.id} src={char.image} alt={char.title} width={100} />
        <p>{char.name}{char.id}</p>
        </>

      ))}
    </div>
  );
};

export default Fetch;
