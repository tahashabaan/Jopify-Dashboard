import asyncHandler from "express-async-handler";
import ApiError from "./../utils/apiError.js";

export default class FactoryDocumrnt {
  constructor(doc) {
    this.doc = doc;
  }

  async createDocument(req, res, next) {
    try {
      await this.doc.create(req.body);
      res.status(201).json({ message: "sucessfully create document" });
    } catch (err) {
      next(
        new ApiError({
          statusCode: 402,
          message: err.message,
        })
      );
    }
  }

  async getDocuments(req, res, next) {
    try {
      const documents = await this.doc.find();
      res
        .status(201)
        .json({ message: "sucessfully fetch documents", documents });
    } catch (err) {
      next(
        new ApiError({
          statusCode: 402,
          message: err.message,
        })
      );
    }
  }

  async getDocumentById(req, res, next) {
    const document = await this.doc.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "sucessfully update document", document });
  }

  async updateDocumentById(req, res, next) {
    const document = await this.doc.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "sucessfully update document", document });
  }
  async deleteDocumentById(req, res, next) {
    await this.doc.findByIdAndRemove(req.params.id);
    res.status(201).json({ message: " document is deleted " });
  }
}

// function createDocument(asyncHandler(async doc =>{

// }))

// const createDocument = asyncHandler(async doc => {
//     await doc.create(req.body);
//     res.status(201).json({message:'sucessfully created document'})
// });

// const getDocuments = asyncHandler(async doc => {
//     const documents= await doc.find();
//     res.status(201).json({message:'sucessfully fetch documents', documents})
// })

// const getDocumentById= asyncHandler(async doc => {
//     const document=await doc.findById(req.params.id);
//     res.status(201).json({message:'sucessfully fetch document', document})
// })

// const updateDocumentById = asyncHandler(async doc => {
//     const document =await doc.findByIdAndUpdate(req.params.id,req.body);
//     res.status(201).json({message:'sucessfully update document', document})
// })

// const removeDocumentById = asyncHandler(async doc => {
//     await doc.findByIdAndRemove(req.params.id);
//     res.status(201).json({message:' document is deleted '})
// })

// export {
//     createDocument,
//     getDocuments,
//     getDocumentById,
//     updateDocumentById,
//     removeDocumentById}
