module.exports = {
    STATUS_CODES: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
        INVALID_TOKEN: 498,
        CONFLICT: 409,
        ENTITY_ALREADY_EXIST: 422,
        SUCCESS: 200,
        ERROR: 301
    },
    ERROR_MSG: {
        INVALID_ARGUMENTS: 'Invalid or missing mandatory input arguments.',
        UNKNOWN_ERROR: 'Something went wrong.',
        INTERNAL_SERVER_ERROR: 'Internal server error.',
        UNAUTHORIZED: 'Access denied.'
    },
    RESPONSE_MESSAGES: {
        INTERNAL_SERVER_ERROR: 'Internal Server Error',
        INVALID_TOKEN: 'Invalid tokn',
        FORBIDDEN: 'Forbidden: Access is denied',
        ERROR: 'The server encountered an error processing the request. Please try again, Sorry for the trouble.',
    },
    SOCKET_EVENTS: {
        USER_JOINED: 'user-joined',
        NEW_MESSAGE: 'new-message'
    },
};
