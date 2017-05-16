const mongoose = require('mongoose')
var Schema = mongoose.Schema

var houseSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  photo:{
    type:String
  },
  price:{
    type:String
  },
  address:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

var House = mongoose.model('House', houseSchema)

module.exports = House
