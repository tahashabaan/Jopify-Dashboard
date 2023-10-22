import asyncHandler from "express-async-handler"

import User from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const userDocument = new FactoryDocumrnt(User);

// @admin only
// @path /add-job
export const createJob= asyncHandler(async (req, res, next)=>{
    userDocument.createDocument(req, res, next);
})

export const getJobs= asyncHandler(async (req, res, next)=>{
    userDocument.getDocuments(req, res, next);
})userDocument

export const getJobById= asyncHandler(async (req, res, next)=>{
    userDocument.getDocumentById(req, res, next);
})

export const updateJobById= asyncHandler(async (req, res, next)=>{
    userDocument.updateDocumentById(req, res, next);
})


export const delJobById= asyncHandler(async (req, res, next)=>{
    userDocument.delDocumentById(req, res, next);
})