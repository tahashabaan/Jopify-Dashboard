import asyncHandler from 'express-async-handler'



export default class FactoryDocumrnt {
    constructor(doc) {
        this.doc=doc;
    }

      
}

function createDocument(asyncHandler(async (doc) => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})

const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
});

const getDocuments = asyncHandler(async doc => {
   const documents= await doc.find();
    res.status(201).json({message:'sucessfully fetch documents', documents})
})

const getDocumentById= asyncHandler(async doc => {
    const document=await doc.findById(req.params.id);
    res.status(201).json({message:'sucessfully fetch document', document})
})

const updateDocumentById = asyncHandler(async doc => {
    const document =await doc.findByIdAndUpdate(req.params.id,req.body);
    res.status(201).json({message:'sucessfully update document', document})
})

const removeDocumentById = asyncHandler(async doc => {
    await doc.findByIdAndRemove(req.params.id);
    res.status(201).json({message:' document is deleted '})
})

export {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocumentById,
    removeDocumentById}