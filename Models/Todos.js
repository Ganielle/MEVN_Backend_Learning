//  MODELS
//  are used for storing the types of variables that needed to be used
//  or stored in the database, of course to limit the user from entering
//  much more data than needed to, for example the user can't add a 
//  data of birthday with a data type of int since its not part of the schema

const mongoose = require("mongoose")
const TodosSchema = new mongoose.Schema({
    todo: String,
    author: String
})

module.exports = mongoose.model('todo', TodosSchema)