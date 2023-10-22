import asyncHandler from "express-async-handler"

import User from '../models/User.js';
import FactoryDocumrnt from './factoryDocument.js';

const userDocument = new FactoryDocumrnt(User);

// @admin only
// @path /add-job
export const createUser= asyncHandler(async (req, res, next)=>{
    userDocument.createDocument(req, res, next);
})

export const getUsers= asyncHandler(async (req, res, next)=>{
    req.filterObj={}
    userDocument.getDocuments(req, res, next);
})

export const getUserById= asyncHandler(async (req, res, next)=>{
    userDocument.getDocumentById(req, res, next);
})

export const updateUserById= asyncHandler(async (req, res, next)=>{
    userDocument.updateDocumentById(req, res, next);
})

export const delUserById= asyncHandler(async (req, res, next)=>{
    userDocument.delDocumentById(req, res, next);
})

export const profile = asyncHandler(async (req, res, next)=>{
    req.filterObj= {_id: req.user._id}
    userDocument.getDocuments(req, res, next);
})