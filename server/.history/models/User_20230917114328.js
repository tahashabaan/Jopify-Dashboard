import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:3
    },
    lName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:3
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    password:{
        type:String,
        minLength:
    }
})

export default model('User', userSchema);