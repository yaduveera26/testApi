const mongoose = require('mongoose')

const Todo = mongoose.Schema({
    activity :{
        type : String
    },
    priority:{
        type : String
    }
})

let todo = module.exports = mongoose.model('todos',Todo)