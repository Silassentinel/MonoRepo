// #region imports
import BaseError from './BaseError';
// #endregion

class RequestValidationError extends BaseError {
// #region props
  statusCode = 400;

  // #endregion
  // #region constructor
  // eslint-disable-next-line no-unused-vars
  constructor(public errors: {
        message: string,
        field?: string;
    }[]) {
    super('Invalid request parameters');
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  // #endregion
  // #region methods
  serializeErrors() {
    return this.errors.map((err) => ({ message: err.message, field: err.field }));
  }
  // #endregion
}

export default RequestValidationError;
