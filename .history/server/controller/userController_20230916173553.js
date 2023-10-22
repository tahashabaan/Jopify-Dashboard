import asyncHandler from "express-async-handler"

import User from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const jobDocument = new FactoryDocumrnt(User);

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