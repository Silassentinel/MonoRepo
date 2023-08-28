import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Views/Home/main';
import Repos from './Views/Repos/main';
import Resume from './Views/Resume/main';
import TopNavBar from './components/TopNavBar/main';

const App = () => {

  return (
    <div className="App">
      <TopNavBar />
      <Home /> 
      <Repos />
      <Resume />
    </div>
  )
}

export default App
