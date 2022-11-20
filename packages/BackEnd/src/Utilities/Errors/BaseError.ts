/**
 * This is the base error class which will be used to create custom errors,
 * formatted to our liking
 */
class BaseError extends Error {
  /**
       * The CTOR to instantiate a new BaseError and provide information about the error
       * @param message The message to be displayed
       */
  public constructor(message?: string|undefined/* , */) {
    super();
    if (message === undefined || message === null) throw new Error('message is null or undefined');
    this.message = message;
  }
}

export default BaseError;
