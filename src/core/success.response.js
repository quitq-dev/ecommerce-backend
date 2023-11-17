const { STATUS_CODE, REASON_STATUS_CODE } = require("../configs/response");

class SuccessResponse {
  constructor({
    message,
    statusCode = STATUS_CODE.OK,
    reasonStatusCode = REASON_STATUS_CODE.OK,
    metadata = {},
  }) {
    this.message = message || reasonStatusCode;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}

class CREATED extends SuccessResponse {
  constructor({
    message,
    statusCode = STATUS_CODE.CREATED,
    reasonStatusCode = REASON_STATUS_CODE.CREATED,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

module.exports = { OK, CREATED };
