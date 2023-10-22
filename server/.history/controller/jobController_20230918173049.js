import asyncHandler from "express-async-handler"

import Job from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const jobDocument = new FactoryDocumrnt(Job);


// @admin only
// @path /add-job
export const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument.createDocument(req, res, next);
})

export const getJobs= asyncHandler(async (req, res, next)=>{
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
   const job= await Job.findOne({userId:req.user._id});
   con
})






