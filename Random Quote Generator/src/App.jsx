import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import RotatingCircle from './comps/RotatingCircle'
import Display from './comps/Display'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<RotatingCircle />}></Route>
        <Route path='/Display.jsx' element={<Display />}></Route>
      </Routes>
    </>
  )
}

export default App
