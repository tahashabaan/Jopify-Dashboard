import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    name:{
        type:string,
        r
    },
    email:String
})

export default model('User', userSchema);