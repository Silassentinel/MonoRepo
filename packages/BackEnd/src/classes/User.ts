// #region imports
import { v4 as uuidv4 } from 'uuid';
// #endregion

/**
 * This class will be the model for the user object
 */
class User {
  // #region Ctor
  // eslint-disable-next-line
   private constructor() {
    this.SetUID();
  }

  /**
    * Constructor for the User class which instantiates the User object
    * @returns An instance of the User class
    */
  static GetInstance(): User {
    return new User();
  }

  // #endregion
  // #region Properties
  private _username!: string;

  private _password!: string;

  private _uid!: string;

  // #endregion
  // #region Methods

  /**
   * This method will set the UID for the user at creation
   */
  private SetUID() {
    this._uid = uuidv4();
  }

  /**
   * This method will get the UID for the user
   * @returns The UID of the user
   */
  GetUID = (): string => this._uid;

  /**
     * Function to get the password of the user
     * @returns The password of the user
     */
  GetPassword = () => this._password;

  /**
     * This method will hash the password of the user
     * @param password The password to update
     */
  SetPassword = (password: string): void => { this._password = password; };

  /**
    * This method will update the pw with the hashed password
    * @param password The password to update
    */
  UpdatePassword = (password: string): void => {
    // if the provided parameter:'password' is already set this.passwaord return
    if (this._password === undefined) {
      throw new Error('password is undefined');
    }
    this._password = password;
  };

  /**
     * Function to get the username of the user
     * @returns The username of the user
     */
  GetUsername = () => {
    if (this._username === undefined) throw new Error('username was not set');
    return this._username;
  };

  /**
     * This method will set the username of the user
     * @param username The username of the user
     */
  SetUserName = (username: string): void => {
    if (username === undefined) throw new Error('username is undefined');
    if (username === null) throw new Error('username is null');
    this._username = username;
  };
  // #endregion
}

export default User;
