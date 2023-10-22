import {model, Schema} from 'mongoose';

 
const jobSchema = new Schema({
      company:{
        type:String,
        required:true
      },
      slug:
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
          enum:['full-time', 'part-time', 'internship'],
          default:'full-time'
      }
},{
    timestamps:true
})
export default model('Job', jobSchema)