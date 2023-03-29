//  ROUTES OF THE API

const express = require("express")
const router = express.Router()
const Todo = require('../Models/Todos') //  GETTING THE SCHEMA HERE

//  GET ALL Todo routes
router.get('/', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

//  GET by a variable like ID or name or so on
router.get('/get/:id', async (req, res) => {
    const data = await Todo.findById({ _id : req.params.id })
    res.json(data)  // returning a value for the front end
})

//  CREATE todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        //  req.body // What the Vue app is sending 
        {
            author: "ganielle",
            todo: "Learn mevn"
        }
    )

    const saveTodo = await newTodo.save()   //  SAVE is used to create new entry in the database
    res.json(saveTodo)  // returning a value for the front end
})

//  DELETE by a variable like ID or name or so on
router.delete('/delete/:id', async (req, res) => {
    const toDelete = await Todo.findByIdAndDelete({ _id : req.params.id })   
    res.json(toDelete)  // returning a value for the front end
})

//  UPDATE by a variable like ID or name or so on
router.put('/update/:id', async (req, res) => {
    const toUpdate = await Todo.updateOne(
        //  { _id : req.params.id }, { $set: req.body }
        {
            author: "belle",
            todo: "updated todo"
        }
    )   
    res.json(toUpdate)  // returning a value for the front end
})

module.exports = router