import React from 'react'

import './MachineCard.css'

function MachineCard({machine}){
  const {
    machine_name,
    machine_id,
    machine_section,
    machine_sensors
  } = machine
  return(
    <div className="card">
      <h2 className='card-title'>{machine_name}</h2>
      <img src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
      <div className="card-info">
        <span className='card-info-sector'>{`Setor: ${machine_section}`}</span>
        <span className='card-info-id'>{`ID: ${machine_id}`}</span>
      </div>
      <div className="card-sensors">
        {
          machine_sensors.map(sensor => (
            <span key={sensor}>{sensor}</span>
          ))
        }
      </div>
    </div>
  )
}

export default MachineCard