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
        enum:['']
      },
      Type:{
          type:String,
          enum
      }
})
export default model('Job', jobSchema)