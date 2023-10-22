import asyncHandler from 'express-async-handler'


const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})

const getDocuments = asyncHandler(async doc => {
   const document= await doc.find(req.body);
    res.status(201).json({message:'sucessfully document', document})
})

const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})

const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})

const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})