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
        
      }
})
export default model('Job', jobSchema)