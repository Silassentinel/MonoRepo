import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Views/Home/main';
import Repos from './Views/Repos/main';
import Resume from './Views/Resume/main';
import TopNavBar from './components/TopNavBar/main';
import Footer from './compenents/footer/main'

const App = () => {

  return (
    <div className="App">
      <TopNavBar />
      <Home /> 
      <Repos />
      <Resume />
      <Footer />
    </div>
  )
}

export default App
