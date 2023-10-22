import asyncHandler from 'express-async-handler'

const createDocument = asyncHandler(async doc => {

    await doc.create(req.body)
})