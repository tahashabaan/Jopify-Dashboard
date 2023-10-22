import asyncHandler from 'express-async-handler'


const createDocument = asyncHandler(async doc => {
    await doc.create(req.body);
    res.status(201).json({message:'sucessfully created document'})
})

const getDocuments = asyncHandler(async doc => {
   const document= await doc.find(req.body);
    res.status(201).json({message:'sucessfully fetch documents', document})
})

const getDocumentBy<div class="mb-3">
    <label id="id_label" for="id"> ID</label>
    <input id="id" name="id" type="text" class="form-control" />
</div>= asyncHandler(async doc => {
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