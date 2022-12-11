// #region imports
// #endregion

class BaseError extends Error {
  public constructor(message: string) {
    if (message === undefined || message === null) throw new Error('message is null or undefined');
    super(message);
  }
}

export default BaseError;
