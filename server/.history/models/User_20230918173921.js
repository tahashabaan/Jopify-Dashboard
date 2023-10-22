import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        // lowercase:true,
        minLength:3
    },
    lName:{
        type:String,
        required:true,
        // lowercase:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    password:{
        type:String,
        minLength:8
    },
    jobs:[{
        type:Schema.ObjectId,
        ref:'Job',
        required:true
    }]
})

export default model('User', userSchema);