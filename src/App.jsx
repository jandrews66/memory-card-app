import { useState } from 'react'

import './App.css'
import Fetch from './Fetch.jsx'
import Card from './Card.jsx'
function App() {
  const [chars, setChars] = useState([]);

  return (
    <>
      <h1>Bobs Burgers</h1>
      <Fetch setChars={setChars}/>
      <Card chars={chars} setChars={setChars}/>
    </>
  )
}

export default App
