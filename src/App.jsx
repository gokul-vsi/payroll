import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home'
import { Header } from './Components/Header'
import { Attendance } from './Components/Attendance'
import { Employees } from './Components/Employees';
import { Salary } from './Components/Salary';
import { Position } from './Components/Position';
import { User } from './Components/User';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/attendance' element={<Attendance/>}></Route>
        <Route path='/employees' element={<Employees/>}></Route>
        <Route path='/salary' element={<Salary/>}></Route>
        <Route path='/position' element={<Position/>}></Route>
        <Route path='/user' element={<User/>} ></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
