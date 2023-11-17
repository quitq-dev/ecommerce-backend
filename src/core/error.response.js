const { STATUS_CODE, REASON_STATUS_CODE } = require("../configs/response");

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor(
    message = REASON_STATUS_CODE.CONFLICT,
    statusCode = STATUS_CODE.CONFLICT
  ) {
    super(message, statusCode);
  }
}

module.exports = {
  ConflictRequestError,
};
