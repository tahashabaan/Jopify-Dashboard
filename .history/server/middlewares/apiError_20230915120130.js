
export default 
class ApiError extends err{
    constructor(statusCode, message){
        super(message);
        this.statusCode=statusCode
    }
}