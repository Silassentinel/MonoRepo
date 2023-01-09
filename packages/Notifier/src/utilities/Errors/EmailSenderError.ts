// #region imports
import BaseError from './BaseError';
// #endregion
/**
 * This class implements the base error class to finetune the errors for the email sender.
 */

class EmailSenderError implements BaseError {
  // #region props
  name: string;

  message: string;

  stack?: string | undefined;

  cause?: unknown;

  // #endregion
  // #region constructor
  constructor(message: string, cause?: unknown) {
    this.name = 'EmailSenderError';
    this.cause = cause;
    this.message = message;
    this.stack = new Error().stack;
  }
  // #endregion
}

export default EmailSenderError;
