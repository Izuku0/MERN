class ApiError extends Error{
    constructor(
       statuscode,
       message="Something went wrong",
       data,
    ){
        super(message),
        this.statuscode = statuscode,
        this.data = data
    }
}

export {ApiError}