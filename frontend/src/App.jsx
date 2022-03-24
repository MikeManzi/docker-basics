import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [date, setDate] = useState()

  useEffect(async () =>{
      const req = await fetch("http://backend:4000/")
      const resp = await req.text()
      setDate(resp)
  },[])

  return (
    <div className="App">
        {date && <p>The date from db is {date}</p>}
    </div>
  )
}

export default App
