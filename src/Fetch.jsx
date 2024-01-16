import { useState, useEffect } from 'react';

const Fetch = ({setChars}) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bobsburgers-api.herokuapp.com/characters/51,167,280,275,467,457,227,317,155,18,410,391');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChars(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);


};

export default Fetch;
