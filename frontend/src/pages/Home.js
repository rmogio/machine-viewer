import React, {useState, useEffect} from 'react'

import api from '../services/api'

import './Home.css'

import Header from '../components/Header'
import MachineForm from '../components/MachineForm'
import MachineCard from '../components/MachineCard'


function App(){
  const [machines, setMachines] = useState([])

  useEffect(()=>{
    function loadMachine(){
      api.get('machines')
        .then(response => {
          setMachines(response.data)
        })
    }
    loadMachine()
  },[])

  return(
    <>
    <Header />
    <div className="page-home">
      <aside>
        <strong>Cadastrar</strong>
        <MachineForm />
      </aside>
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
    </div>
    </>
  )
}

export default App