

export const handleError =
(err, req, res, next) => {
       res.status(err.statusCode || 402).json({
          message:err.message||' som'
       })
  }