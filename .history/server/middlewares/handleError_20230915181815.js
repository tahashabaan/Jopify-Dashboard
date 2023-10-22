

export const handleError =
(err, req, res, next) => {
       res.status(err.stat)
  }