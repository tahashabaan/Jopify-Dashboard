import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    name:{
        
    },
    email:String
})

export default model('User', userSchema);