const cors =require("cors");
const express = require("express");
const mongoose = require("mongoose");

const todosRoutes = require('./routes/todos');
const usersRoutes = require('./routes/users');
 
mongoose.connect('mongodb://localhost:27017/testnodjs');


const app =express();
app.use(express.static('./static'));
app.use(express.json());
app.use(cors());

app.use('/todos',todosRoutes);
app.use('/users',usersRoutes);

app.use('*',(req, res, next)=>{
    res.status(404).json({error:'not_found'});
})
app.use((err, req, res, next)=> {
    res.json(err)
});

app.listen(3000,()=> {
    console.log("this app listen on localhost:3000")
})
