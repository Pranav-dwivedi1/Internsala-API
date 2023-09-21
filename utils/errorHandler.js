class ErrorHandler extends Error{
    constructor(message , statusCode){
       super(message);
       this.statusCode = statusCode;
       Error.captureStackTrac(this, this.constructor);
    }
}
    
    module.exports = ErrorHandler;