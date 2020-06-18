import React, {useState, useEffect} from 'react'

import api from './services/api'

import './App.css'

import Header from './components/Header'
import MachineCard from './components/MachineCard'


function App(){
  const [machines, setMachines] = useState([])

  useEffect(()=>{
    api.get('machines')
      .then(response => {
        setMachines(response.data)
      })
  },[])

  return(
    <>
    <Header />
    <main>
      <div className='container'>
        {
          machines.map(machine => (
            <div key={machine.machine_id}>
              <MachineCard machine={machine}/>
            </div>
          ))
        }
      </div>  
    </main>
    </>
  )
}

export default App