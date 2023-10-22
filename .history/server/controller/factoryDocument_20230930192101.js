import asyncHandler from "express-async-handler";
import ApiError from "./../utils/apiError.js";

// interface Document {
//   createDocument(req, res, next);
// }

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

    let { sortby, limit, page } = req.query;
    // paginate
     limit= parseInt(limit) ||10 ; 
     page=  parseInt(page) || 1;

     const sIndex= (page-1) * limit;
     const eIndex = page * limit;

     const countDoc = this.model.countDocuments();
     const pages = countDoc / limit;

     const paginate={
      limit,
      page,
      pages
     }

     if(eIndex <countDoc) {
         paginate.nextPage = page + 1
         paginate.hasNextPage = true
     }
             
     if(sIndex >0) {
       paginate.prePage = page - 1;
       paginate.hasPrePage = true
     } 


    let keySort={
       'a-z':'position',
       'z-a':"-position",
        newest:'-createdAt',
        oldest:'createdAt'
    };
   

    try {
      const documents = await this.doc
        .find(req.filterObj)
        .sort(keySort[sortby])
        .skip(page)
        .limit(limit);
      res
        .status(202)
        .json({ message: "sucessfully fetch documents", documents, paginate });
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
