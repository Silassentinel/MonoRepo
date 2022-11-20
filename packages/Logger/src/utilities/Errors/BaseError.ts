// #region imports
// #endregion

class BaseError extends Error {
  // #region props
  /**
   * This property holds the name of the error.
   * @type {string}
   * @private
   */
  private _name!: string;

  /**
   * This property holds the error message.
   * @type {string}
   * @private
   */
  private _message!: string;

  /**
   * This property holds the stacktrace of the error.
   * @type {string}
   * @private
   */
  private _stack?: string | undefined;

  /**
   * This property holds the cause of the error.
   * @type {unknown}
   * @private
   */
  private _cause?: unknown;
  // #endregion
  // #region ctor

  /**
   * This constructor will initialize the error.
   * @param message {string}
   */
  public constructor(name:string, message: string, stack?: string | undefined, cause?: unknown) {
    if (message === undefined || message === null) throw new Error('message is null or undefined');
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
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
  GetName = (): string => this._name;

  /**
   * This function returns the message of the error.
   * @returns {string} message
   */
  GetMessage = (): string => this._message;

  /**
   * This function returns the stack of the error.
   * @returns {string | undefined} stack
   */
  GetStack = (): string | undefined => this._stack;

  /**
   * This function returns the cause of the error.
   * @returns {unknown} cause
   */
  GetCause = (): unknown => this._cause;
  // ------------------------------

  /**
   * This function sets the name of the error.
   * @param name {string}
   */
  SetName = (name: string): void => {
    this._name = name;
  };

  /**
   * This function sets the message of the error.
   * @param message {string}
   */
  SetMessage = (message: string): void => {
    this._message = message;
  };

  /**
   * This function sets the stack of the error.
   * @param stack {string}
   */
  SetStack = (stack: string | undefined): void => {
    this._stack = stack;
  };

  /**
   * This function sets the cause of the error.
   * @param cause {unknown}
   */
  SetCause = (cause: unknown): void => {
    this._cause = cause;
  };
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default BaseError;
