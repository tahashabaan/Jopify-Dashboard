import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fname:{
        type:string,
        r
    },
    email:String
})

export default model('User', userSchema);