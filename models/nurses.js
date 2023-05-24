const mongoose = require('mongoose')

const Schema = mongoose.Schema
const NurseSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    required:true,
  },
})

module.exports = mongoose.model('Nurse', NurseSchema)