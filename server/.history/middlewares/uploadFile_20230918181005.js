import multer from "multer";


const upload = multer({
    storage:diskStorage
})