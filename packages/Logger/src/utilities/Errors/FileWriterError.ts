/**
 * This class contains the file writer error handling.
 */

// #region imports
import BaseError from './BaseError';
// #endregion

class FileWriterError extends BaseError {
  // #region props
  // #endregion
  // #region ctor
  constructor(name: string, message: string, stack: string | undefined, cause?: unknown) {
    super(
      name,
      message,
      stack,
      cause,
    );
    this.SetName(name);
    this.SetMessage(message);
    this.SetStack(stack);
    this.SetCause(cause);
  }
  // #endregion
  // #region methods
  // region getters/setters

  /**
       * This function returns the name of the error.
       * @returns {string} name
       */
  GetName = (): string => this.name;

  /**
       * This function returns the message of the error.
       * @returns {string} message
       */
  GetMessage = (): string => this.message;

  /**
       * This function returns the stack of the error.
       * @returns {string | undefined} stack
       */
  GetStack = (): string | undefined => this.stack;

  /**
       * This function returns the cause of the error.
       * @returns {unknown} cause
       */
  GetCause = (): unknown => this.cause;
  // ------------------------------

  /**
     * This function sets the name of the error.
     * @param name {string}
     */
  SetName = (name: string): void => {
    this.name = name;
  };

  /**
     * This function sets the message of the error.
     * @param message {string}
     */
  SetMessage = (message: string): void => {
    this.message = message;
  };

  /**
     * This function sets the stack of the error.
     * @param stack {string|undefined}
     */
  SetStack = (stack: string | undefined): void => {
    this.stack = stack;
  };

  /**
     * This function sets the cause of the error.
     * @param cause {unknown}
     */
  SetCause = (cause?: unknown): void => {
    this.cause = cause;
  };
    // #endregion
    // #region private helpers
    // #endregion
}

export default FileWriterError;
