import multer, { diskStorage } from "multer";


const upload = multer({
    storage:diskStorage({
        destination: function(req, file, cb){

        },
        filename:function(req,)

    })
})