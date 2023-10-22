import {model, Schema} from 'mongoose';

 
const jobSchema = new Schema({
      company:{
        type:String,
        required:true
      },
      location:{
        type:String,
        required:true
      },
      status:{
        type:String,
        enum:['pending', 'interview', 'declined'],
        default:'pending'
      },
      Type:{
          type:String,
          enum:['full-time', 'partTime', 'internship'],
          default:'full-time'
      }
})
export default model('Job', jobSchema)