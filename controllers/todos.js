
const Todo = require('../models/todos');

const findOne = (id) =>{
    return Todo.findById(id).populate('userId');
}
const find = () =>{
    return Todo.find();
}

const create = ( title,userId ) => {
    const todo = {title,userId};
    return Todo.create(todo);   ///return proms
   
    //const id = String(data.lastIndexOf(title) + 1);
    //const todo ={ id,title , userId :"1"}
    
}
const editOne = (id,body) =>{
    return Todo.findByIdAndUpdate(id,body);
}
const deletTd = (id) => {
    return Todo.deletOne (id);
} 

module.exports = {
    findOne,
    create,
    editOne,
    find,
    deletTd
}