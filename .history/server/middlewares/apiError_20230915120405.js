
export def class ApiError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode=statusCode
    }
}

