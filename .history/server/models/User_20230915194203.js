import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:8
    },
    lName:{
        type:String,
        required:true,
        lowercase:true,
        minLength:8
    },
    email:{
        type:String,
        re
    },
    image:{
        type:string
    },
})

export default model('User', userSchema);