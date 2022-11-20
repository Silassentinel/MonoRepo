// #region imports
import BaseError from './BaseError';
// #endregion

/**
 * Error class for helper functions
 */
class ToolBoxError extends BaseError {
  /**
     * Creates an instance of ToolBoxError.
     * @param message Eror message
     */
  public constructor(message: string) {
    if (message === undefined || message === null) throw new BaseError('message is null or undefined');
    super(message);
  }
}
export default ToolBoxError;
