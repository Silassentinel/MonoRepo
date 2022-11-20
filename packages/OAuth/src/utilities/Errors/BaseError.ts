// #region imports
// #endregion

class BaseError extends Error {
  constructor(message?:string) {
    super(message);
    this.name = new.target.name;
    this.stack = new Error().stack;
  }
}

export default BaseError;
