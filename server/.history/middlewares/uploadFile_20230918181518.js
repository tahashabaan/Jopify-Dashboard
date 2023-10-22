import multer, { diskStorage } from "multer";


const upload = multer({
    storage:diskStorage({
        destination: function(req, file, cb){
            cb(null, '/uploads')
        },
        filename:function(req, file, cb){
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '' + uniqueSuffix)
        }

    })
})