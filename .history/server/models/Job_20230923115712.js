import {model, Schema} from 'mongoose';

 
const jobSchema = new Schema({
      position:{
        type:String,
        required:true,
      },
      company:{
        type:String,
        required:true
      },
      slug: { 
        type: String, 
        slug: "position", 
        unique: true 
    },
      location:{
        type:String,
        required:true
      },
      status:{
        type:String,
        enum:['all','pending', 'interview', 'declined'],
        default:'pending'
      },
      Type:{
          type:String,
          enum:['all','full-time', 'part-time', 'internship'],
          default:'full-time'
      },
      userId:{
        type:Schema.ObjectId,
        ref:'User',
        required:true
      }
},{
    timestamps:true
})

export default model('Job', jobSchema)

jobSchema.pre('save',function(req, res, next){

  this.slug=slugify(req.body.position)
  next()
})