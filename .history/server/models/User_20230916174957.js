import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:6
    },
    lName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:6
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
})

export default model('User', userSchema);