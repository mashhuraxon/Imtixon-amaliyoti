import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Error from './pages/Error'




const App = () => {
  return (
    <div>
      

        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='about' element={ <About/>}/>
            <Route path='portfolio' element={ <Portfolio/>}/>
            <Route path='contact' element={ <Contact/>}/>
            <Route path='*' element={ <Error/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App