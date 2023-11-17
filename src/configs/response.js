const STATUS_CODE = {
  CONFLICT: 409,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  FORBIDDEN_ERROR: 403,
  OK: 200,
  CREATED: 201,
};

const REASON_STATUS_CODE = {
  CONFLICT: "Conflict error",
  BAD_REQUEST: "Bad request error",
  SERVER_ERROR: "Internal server error",
  FORBIDDEN_ERROR: "Forbidden error",
  OK: "Success",
  CREATED: "Created!",
};

module.exports = {
  STATUS_CODE,
  REASON_STATUS_CODE,
};
