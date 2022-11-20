/**
 * This class contains the error handling for the encryptor.
 */
// #region imports
import BaseError from './BaseError';
// #endregion

class EncryptionError extends BaseError {
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
    Object.setPrototypeOf(this, new.target.prototype);
    this.SetName(name);
    this.SetMessage(message);
    this.SetStack(stack);
    this.SetCause(cause);
  }

  // #endregion
  // #region methods
  // #region getters/setters
  /**
 * This function returns the name of the error.
 * @returns {string} name
 */
  GetStack = (): string | undefined => this.stack;

  /**
     * This function returns the cause of the error.
     * @returns {unknown} cause
     */
  GetMessage = (): string => this.message;

  /**
     * This function returns the name of the error.
     * @returns {string} name
     */
  GetName = (): string => this.name;

  /**
     * This function returns the cause of the error.
     * @returns {string} message
     */
  GetCause = (): unknown => this.cause;
  // ------------------------------

  /**
 * This function sets the name of the error.
 * @param name {string} Name of the error.
 */
  SetName = (name: string): void => {
    this.name = name;
  };

  /**
     * This function sets the message of the error.
     * @param cause {unknown} Cause of the error.
     */
  SetCause = (cause: unknown): void => {
    this.cause = cause;
  };

  /**
     * This function sets the message of the error.
     * @param stack {string} Stack of the error.
     */
  SetStack = (stack: string | undefined): void => {
    this.stack = stack;
  };

  /**
     * This function sets the message of the error.
     * @param message {string} Message of the error.
     */
  SetMessage = (message: string): void => {
    this.message = message;
  };
  // #endregion
  // #region public methods
  // #endregion
  // #region private helpers
  // #endregion
}

export default EncryptionError;
