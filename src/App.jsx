import { useState } from 'react'


import {Routes, Route} from 'react-router-dom'
import Play from './components/Play'
import Footer from './components/footer'
import Header from './components/header'
import Game from './components/Game'

function App() {

  const [score , setScore] = useState(0)
  const [myChoice, setMyChoice] = useState('')
  


  return (
    <>
    <div className='container'>
      <Header score={score} />

      
      
     <Routes>
     <Route exact path='/' element={<Play  setMyChoice={setMyChoice} />} />
        


      <Route exact path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore}/>} />
     
     </Routes>
     

    


      
    </div>
    
    </>
  )
}

export default App
