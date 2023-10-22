import asyncHandler from 'express-async-handler'


const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})