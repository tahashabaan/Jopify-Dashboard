import asyncHandler from "express-async-handler"

import Job from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';
import User from "../models/User.js";

const jobDocument = new FactoryDocumrnt(Job);


// @admin only
// @path /add-job
export const createJob= asyncHandler(async (req, res, next)=>{

    jobDocument.createDocument(req, res, next);
})

export const getJobs= asyncHandler(async (req, res, next)=>{
    const {statusJob, typeJob, sort} = req.body;
     req.filterObj.status= statusJob || 'all';
     req.filterObj.Type= typeJob || 'all';
    //  req.filterObj.status= status || 'all';

   
    jobDocument.getDocuments(req, res, next);
})

export const getJobById= asyncHandler(async (req, res, next)=>{
    jobDocument.getDocumentById(req, res, next);
})

export const updateJobById= asyncHandler(async (req, res, next)=>{
    jobDocument.updateDocumentById(req, res, next);
})


export const delJobById= asyncHandler(async (req, res, next)=>{
    jobDocument.delDocumentById(req, res, next);
})

export const statsJob = asyncHandler(async (req, res, next)=>{
    // 01 match model job
   const job= await User.findById({_id:req.user._id});
  // return job array
  


})






