import asyncHandler from "express-async-handler"

import Job from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const jobDocument = new FactoryDocumrnt(Job);

// @admo
export const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument.createDocument(req, res, next);
})

export const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument.createDocument(req, res, next);
})

export const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument.createDocument(req, res, next);
})

export const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument.createDocument(req, res, next);
})


export const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument.createDocument(req, res, next);
})




