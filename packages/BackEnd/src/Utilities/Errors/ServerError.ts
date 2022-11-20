// #region imports
import BaseError from './BaseError';
// #endregion

class ServerError extends BaseError {
  public constructor(message: string) {
    if (message === undefined || message === null) throw new BaseError('message is null or undefined');
    super(message);
  }
}
export default ServerError;
