import asyncHandler from "express-async-handler"
import slugify from 'slugify'

import Job from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const jobDocument = new FactoryDocumrnt(Job);


// @admin only
// @path /add-job
export const createJob= asyncHandler(async (req, res, next)=>{
     req.body.slug = slugify(req.body.position)
    jobDocument.createDocument(req, res, next);
})

export const getJobs= asyncHandler(async (req, res, next)=>{
    const {statusJob, typeJob} = req.body;
    // if (statusJob)
      req.filterObj = {status: statusJob || 'all'}
    if (typeJob)
       req.filterObj.Type= typeJob || 'all';

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
   const jobs= await Job.find();

   const stats ={
    pending:0,
    interview:0,
    declined:0
   }

   for(let job of jobs){
         if(job.status === 'pending')  stats.pending++;
        else if(job.status === 'interview')   stats.interview++;
        else stats.declined++
   }

   res.status(201).json({statssus:'sucessed!', message:'fetched stats sucessed', stats})


  // return job array
  


})






