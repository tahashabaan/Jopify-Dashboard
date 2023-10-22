import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:string,
        required
    },
    email:String
})

export default model('User', userSchema);