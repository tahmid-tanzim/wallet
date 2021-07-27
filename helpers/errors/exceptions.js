import httpStatusCodes from "http-status-codes";

function errorResponse(value, message, errorCode) {
    return {
        value,
        message,
        errorCode,
    }
}

// Error Messages
function NotFoundError(message) {
    this.value = "";
    this.message = message;
    this.errorCode = httpStatusCodes.NOT_FOUND;
    errorResponse(this.value, this.message, this.errorCode);
}

function BadRequestError(message) {
    this.value = "";
    this.message = message;
    this.errorCode = httpStatusCodes.BAD_REQUEST;
    errorResponse(this.value, this.message, this.errorCode);
}

export default {
    NotFoundError,
    BadRequestError
};
