import asyncHandler from "express-async-handler"

import Job from '../models/Job.js';
import FactoryDocumrnt from './factoryDocument.js';

const jobDocument = new FactoryDocumrnt(Job);

const createJob= asyncHandler(async (req, res, next)=>{
    jobDocument

})


