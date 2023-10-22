import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        minLength:8
    },
    lName:{
        type:String,
        required:true,
        minLength:8
    },
    email:{
        type:String
    },
    image:{
        type:string
    },
})

export default model('User', userSchema);