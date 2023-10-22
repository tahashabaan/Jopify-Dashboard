import {Schema, model} from 'mongoose' 

const userSchema = new Schema({
    fName:{
        type:String,
        required:true,
        // lowercase:true,
        minLength:3
    },
    lName:{
        type:String,
        required:true,
        // lowercase:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    password:{
        type:String,
        minLength:8,
        required:true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
    // jobs:[{
    //     type:Schema.ObjectId,
    //     ref:'Job',
    //     required:true
    // timestamps
}, {timestamps:true})

export default model('User', userSchema);