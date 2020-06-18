const express = require('express')
const cors = require('cors')
const {request, response} = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const door = 3330

let machines=[]

function logRequests(request, response, next){
  const {method, url} = request
  const label = `[${method.toUpperCase()}] ${url}`

  console.time(label)
  next()
  console.timeEnd(label)
}

app.use(logRequests)

app.get('/machines', (request, response)=>{
  return response.json(machines)
})

app.post('/machines', (request, response)=>{
  const {
    machine_name,
    machine_section,
    machine_sensors
  } = request.body

  const machine_id = Date.now()

  const machine = {
    machine_name, machine_id, machine_section, machine_sensors
  }
  machines.push(machine)

  return response.json(machine)

})

app.put('/machines/:id', (request, response) => {
  const {id} = request.params
  const {machine_section, machine_sensors} = request.body

  const machineIndex = machines.findIndex(machine => machine.machine_id == id)

  if(machineIndex < 0){
    return response.status(400).json({message: "Machine not found. Try using an valid machine_id number"})
  }

  const machine_name = machines[machineIndex].machine_name

  const machine = {
    machine_id: id,
    machine_name,
    machine_sensors,
    machine_section
  }

  machines[machineIndex] = machine

  return response.json(machine)
})

app.delete('/machines/:id', (request, response)=>{
  const {id} = request.params

  const machineIndex = machines.findIndex(machine => machine.machine_id == id)

  if(machineIndex<0){
    return response.status(400).json({message: "Machine not found. Try again using a valid machine_id number"})
  }

  machines.splice(machineIndex, 1)

  return response.status(204).send()
})

app.put('/machines/:id/addsensors', (request, response) => {
  const {id} = request.params
  const {sensors} = request.body
  const machineIndex = machines.findIndex(machine => machine.machine_id == id)

  if(machineIndex<0){
    return response.status(400).json({message: "Machine not found. Try again using a valid machine_id number"})
  }
  
  let machine = machines[machineIndex]
  const {machine_id, machine_name, machine_section} = machine
  const machineSensors = machine.machine_sensors

  sensors.forEach(sensor => machineSensors.push(sensor) )
  
  machine = {
    machine_id,
    machine_name,
    machine_section,
    machine_sensors: machineSensors
  }

  machines[machineIndex] = machine
  
  return response.json(machine) 
  
})

app.listen(door, () =>{
  console.log(`Backend sendo executado na porta ${door}!`)
})

