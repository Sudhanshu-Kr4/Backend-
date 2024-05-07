// API error handler (nodejs Api error)
// In this class constructor are available but we generate custom constructor to send error

console.log("ApiError is running");

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ){
    super(message) 
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false;
    this.errors = errors

    if(stack) {
      this.stack = stack
    }else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
} 

export { ApiError }