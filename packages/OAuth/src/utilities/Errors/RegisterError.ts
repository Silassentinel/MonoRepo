// #region imports
import BaseError from './BaseError';
// #endregion

/**
 * Error class for the registration.
 */
class RegisterError extends BaseError {
  /**
     * Creates an instance of RegisterError.
     * @param message Error message
     */
  public constructor(message: string) {
    if (message === undefined || message === null) throw new BaseError('message is null or undefined');
    super(message);
  }
}

export default RegisterError;
