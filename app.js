const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://yaduveera:1234@cluster0.tz6pn.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;


db.once('open', function () {
    console.log('connected');
});

db.on('error', function (err) {
    console.log(err);
});

const Todo = require('./models/Todo')

app.get('/',(req,res)=>{
   
            Todo.find({},(err,todos)=>{
                if(err) console.log(err)
                else console.log(todos)
                res.send(todos);
            })
})

app.post('/add',(req,res)=>{
    let activity = req.body.activity;
    let priority = req.body.priority;
    let todo = new Todo()
    todo.activity = activity;
    todo.priority = priority;
    todo.save((err)=>{
        if(err) console.log(err)
        else console.log('saved successfully')
        res.send(todo.find())
    })
})

app.listen('3000',(err)=>{
    if(err) console.log(err);
    else console.log('listening at 3000');
})