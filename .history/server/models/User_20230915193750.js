import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:string,
        required:true,
        min:5
    },
    lName:{
        type:string,
        required:true,
        min:5
    },
    fName:{
        type:string,
        required:true,
        min:5
    },
    email:String
})

export default model('User', userSchema);