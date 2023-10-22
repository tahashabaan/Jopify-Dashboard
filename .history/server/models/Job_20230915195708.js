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
          enum:['fullTime', 'partTime', 'internship'],
          default:'full'
      }
})
export default model('Job', jobSchema)