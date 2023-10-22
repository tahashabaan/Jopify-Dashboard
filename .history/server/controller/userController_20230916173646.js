import asyncHandler from "express-async-handler"

import User from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const userDocument = new FactoryDocumrnt(User);

// @admin only
// @path /add-job
export const createU= asyncHandler(async (req, res, next)=>{
    userDocument.createDocument(req, res, next);
})

export const getUs= asyncHandler(async (req, res, next)=>{
    userDocument.getDocuments(req, res, next);
})

export const getUById= asyncHandler(async (req, res, next)=>{
    userDocument.getDocumentById(req, res, next);
})

export const updateUById= asyncHandler(async (req, res, next)=>{
    userDocument.updateDocumentById(req, res, next);
})


export const delUById= asyncHandler(async (req, res, next)=>{
    userDocument.delDocumentById(req, res, next);
})