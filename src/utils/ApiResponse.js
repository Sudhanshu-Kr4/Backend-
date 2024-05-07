// Custom Api response

console.log("api-response is running");

class ApiResponse {
  constructor(statuscode, data, message = "Success"){
    this.statuscode = statuscode
    this.data = data
    this.message = message
    this.success = statuscode < 400
  }
}

export { ApiResponse }