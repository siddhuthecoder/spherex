import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignInForm from './components/SignIn'
// import About from './pages/About'
// import Services from './pages/Services'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact'
import './App.css'
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignInForm/>} />
        {/* <Route path='/about' element={<About/>} />

        <Route path='/projects' element={<Projects/>} />

        <Route path='/services' element={<Services/>} />

        <Route path='/contact' element={<Contact/>} /> */}

      </Routes>
    </Router>
  )
}

export default App