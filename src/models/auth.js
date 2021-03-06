const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    createdAt:{
        type: Date,
        default:Date.now,

    },
    Task: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        default: [],
      }]
})
userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash

    next()
})
const User = mongoose.model('User', userSchema)
module.exports = User;
