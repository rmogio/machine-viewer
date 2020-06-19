import React from 'react'

function MachineForm(){


  return(
    <form>
      <div className="input-block">
        <label htmlFor="machine_name">Nome da máquina</label>
        <input
          name='machine_name'
          id='machine_name'
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="machine_section">Setor</label>
        <input
          name='machine_section'
          id='machine_section'
          required
        />
      </div>
      <div className="input-block">
          <label htmlFor="machine_sensors">Sensores</label>
          <input
            name='machine_sensors'
            id='machine_sensors'
            required
          />
      </div>
      <button type="submit">Salvar</button>      
    </form>
  )
}

export default MachineForm