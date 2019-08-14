//This is where we will set up our server
const express= require('express')
const app= express()
const ctrl= require('./controller')

app.use(express.json())


//This is where my endpoints will go
app.get('/api/pets', ctrl.getPets)
app.post('/api/pets', ctrl.createPet)
app.put('/api/pets/:id', ctrl.updatePet)
app.delete('/api/pets/:id', ctrl.deletePet)

const port= 3333;
app.listen(port, ()=> console.log(`ten points to ${port}`))