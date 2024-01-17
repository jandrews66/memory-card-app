import { useState, useEffect } from 'react';

export const Fetch = ({setChars}) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bobsburgers-api.herokuapp.com/characters/51,167,280,275,467,457,227,212,441,18,184,391');
        //const response = await fetch('https://bobsburgers-api.herokuapp.com/characters/');
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
export const FetchBurg = ({setBurg}) => {
    useEffect(() => {
        const fetchData = async () => {
            const ranNum = Math.floor(Math.random() * 9) + 1
    
          try {
            const response = await fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${ranNum}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            setBurg(data)
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, []);    

}
