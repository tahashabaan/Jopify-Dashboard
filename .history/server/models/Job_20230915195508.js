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
        enum:['pem', 'partTime', 'internship']
      },
      Type:{
          type:String,
          enum:['fullTime', 'partTime', 'internship']
      }
})
export default model('Job', jobSchema)