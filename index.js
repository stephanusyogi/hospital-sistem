require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
const Nurse = require('./models/nurses')

mongoose.set('strictQuery', false)
const connectDB = async () => {
 try{
  const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`MongoDB Connected: ${conn.connection.host}`)
 }catch(error){
  console.log(error)
  process.exit(1)
 }
}

app.get('/', (req, res)=>{
  res.send("Welcome to the jungle!")
})

app.get('/add-nurse', async (req, res)=>{
  try {
    await Nurse.insertMany([
      {
        name:"Stephanus Yogi",
        username:"stephanusyogi",
        password:"test123",
        role:"Perawat",
      },
      {
        name:"Laurentius Vico",
        username:"laurentiusvico",
        password:"test123",
        role:"Farmasi",
      }
    ])
    res.send("Data Added!")
  } catch (error) {
    console.log("err",+error)
  }
})

app.get('/nurse', async (req, res)=>{
  const nurse = await Nurse.find()
  if (nurse) {
    res.json(nurse)
  } else {
    res.send("Something went wrong.")
  }
})

connectDB().then(()=>{
  app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
  })
})