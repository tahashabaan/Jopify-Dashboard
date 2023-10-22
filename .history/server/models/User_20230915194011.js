import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        minLength:5
    },
    lName:{
        type:String,
        required:true,
        min:5
    },minLength
    email:{
        type:String
    },
    image:{
        type:string
    },
})

export default model('User', userSchema);