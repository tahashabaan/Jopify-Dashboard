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
          statusCode: 401,
          message: err.message,
        })
      );
    }
  }

  async getDocuments(req, res, next) {
    const { sortby } = req.body;
    let keySort={
       'a-z':'position',
       'z-a':"-position",
        newest:'-createdAt',
        oldest:'createdAt'
    };
   

    try {
      const documents = await this.doc
        .find(req.filterObj)
        .sort(keySort[sortby]);
      res
        .status(201)
        .json({ message: "sucessfully fetch documents", documents });
    } catch (err) {
      next(
        new ApiError({
          statusCode: 401,
          message: err.message,
        })
      );
    }
  }

  async getDocumentById(req, res, next) {
    try {
      const document = await this.doc.findById(req.params.id);
      res.status(201).json({ message: "sucessfully fetch document", document });
    } catch (err) {
      next(
        new ApiError({
          statusCode: 403,
          message: err.message,
        })
      );
    }
  }

  async updateDocumentById(req, res, next) {
    try {
      const document = await this.doc.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res
        .status(201)
        .json({ message: "sucessfully update document", document });
    } catch (err) {
      next(
        new ApiError({
          statusCode: 403,
          message: err.message,
        })
      );
    }
  }

  async delDocumentById(req, res, next) {
    try {
      await this.doc.findByIdAndRemove(req.params.id);
      res.status(201).json({ message: " document is deleted " });
    } catch (err) {
      next(
        new ApiError({
          statusCode: 403,
          message: err.message,
        })
      );
    }
  }
}
