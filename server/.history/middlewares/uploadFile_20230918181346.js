import multer, { diskStorage } from "multer";


const upload = multer({
    storage:diskStorage({
        destination: function(req, file, cb){
            cb(null, '')
        },
        filename:function(req, file, cb){

        }

    })
})