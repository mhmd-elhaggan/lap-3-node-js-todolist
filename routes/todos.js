const fs = require('fs');
const express = require('express');
const todoController = require('../controllers/todos');
const { title } = require('process');
const { response } = require('express');
const router = express.Router();

/////////  find all
router.get('/',(req,res,next) => {
    todoController.find()
    .then((todo) => {
        if(!todo){
            res.status(404).end();
            return;
        }
        res.json(todo);
        })
        .catch(e => {
            res.status(500).json(e)
    })
});

///////// find one
router.get('/:id',(req,res,next) => {
    const { id } = req.params;
    todoController.findOne(id)
    .then((todo) => {
        if(!todo){
            res.status(404).end();
            return;
        }
        res.json(todo);
        })
        .catch(e => {
            res.status(500).json(e)
    })
});

////// create
router.post('/',(req,res,next) => {
    const { title } = req.body;
    todoController.create(title,"6207c1ac1af5d2cd5c159c1b")
    .then((todo) => {
        res.json(todo);
    })
    .catch(e => res.status(422).json)
});

///////// patch
router.patch('/:id',(req,res,next) => {
    const { id } = req.params;
    todoController.editOne(id,res.body)
    .then(response => {
        res.json({
            Comment:"done patch",
            responseType:"success"
        })
    })
    .catch(err => {
        res.status(400).end()
    })
});
router.delete('/:id',(req,res,next) => {
    const { id } = req.params;
    todoController.deletTd(id).then((data => {
        if (!data){
            res.status(404).json("error")
        }
    })).catch((err) => {
        res.status(404).json(err)
    })

});



module.exports = router;  ///for conect to app (index.js)