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
    email:{
        type:String
    },
    image:{
        type:string
    },
})

export default model('User', userSchema);