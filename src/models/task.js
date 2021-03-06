const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    descricao:{
        type:String,
        require:true
    },
    prioridade:{
        type:String,
        require: true
    },
    createdAt:{
        type: Date,
        default:Date.now,

    },
})
const Task = mongoose.model('Task', taskSchema)
module.exports = Task;
