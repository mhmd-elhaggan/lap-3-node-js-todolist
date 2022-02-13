const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title:{
        type : String,
        minLength: 5,
        maxLength: 40,
        required: true,
        trim: true
    }
    ,
    userId: {
        type : mongoose.SchemaTypes.ObjectId,
       ref : 'user'
    }
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;