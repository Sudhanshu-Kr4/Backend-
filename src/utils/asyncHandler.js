// API response handler

const asyncHandler = (requestHandler) => {
  (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}
console.log("asynchandler is running");
export {asyncHandler}

/*
const asyncHandler2 = (fn) => async (req,res,next) => {
  try{
    await fn(req,res,next)
  }catch (error) {
    res.status(err.code || 500).json({
      success : false,
      mesage : err.message
    })
  }
}
*/