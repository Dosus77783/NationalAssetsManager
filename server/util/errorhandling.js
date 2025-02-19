
function extValErrors(err) {
    const validationErrors = {};
    if (err.name === 'ValidationError') {
        for (const field in err.errors) {
            if (err.errors.hasOwnProperty(field)) {
                const errorMessage = err.errors[field].message;
                validationErrors[field] = errorMessage;
            }
        }
    }
    return validationErrors;
}

export function notFoundError(req, res, next){
    console.log("inside notFoundError--------------------------------")
    const err = new Error('Not Found');
    err.statusCode = 404;
    err.name = "Not Found";
    next(err);
}

export function normalizeErrors(err, req, res, next){
    console.log("inside normalizeErrors--------------------------------")

    err.name === "ValidationError" ? err.statusCode = 400 : "";

    const normalizedError = {
        statusCode: err.statusCode || 500,
        message: err.message || "A server error has occured",
        name: err.name || 'Server Error',
        validationErrors: extValErrors(err)
    };

    res.status(normalizedError.statusCode).json(normalizedError)
}

