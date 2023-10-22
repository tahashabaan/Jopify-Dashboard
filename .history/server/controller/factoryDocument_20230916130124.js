import asyncHandler from 'express-async-handler'


const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})

const getDocuments = asyncHandler(async doc => {
   const document= await doc.find(req.body);
    res.status(201).json({message:'sucessfully fetch documents', document})
})

const getDocumentById= asyncHandler(async doc => {
    await doc.findByIdAndUpdate(req.body);
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