import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:string,
        required:true,
        min:
    },
    email:String
})

export default model('User', userSchema);