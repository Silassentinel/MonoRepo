// #region imports
import ILogin from '../interfaces/ILogin';
// #endregion

/**
 * This class represents the login object which implements the ILogin interface
 */
class Login implements ILogin {
  // #region Ctor
  /**
     * Constructor for the Login class which instantiates the Login object
     */
  // eslint-disable-next-line
  private constructor() { }

  static GetInstance(): ILogin {
    return new Login();
  }
  // #endregion
  // #region Properties

  /**
     * The username of the user
    */
  private UserName!: string;

  /**
     * The password of the user
     */
  private Password!: string;

  /**
     * The hashed password of the user
    */
  private HashedPassword!: string;

  // #endregion
  // #region Methods
  /**
     * This method will set the username of the user
     * @param username The username of the user
     */
  SetUserName = (username: string): void => {
    if (username === undefined) {
      throw new Error('username is undefined');
    }
    this.UserName = username;
  };

  /**
     * Getter for the username of the user
     * @returns The username of the user
     */
  GetUserName = (): string => this.UserName;

  /**
     * This method will set the password of the user
     * @param password The password of the user
     */
  SetPassword = (password: string): void => {
    this.Password = password;
  };

  /**
     * Getter for the password of the user
     * @returns The password of the user
     */
  GetPassword = (): string => this.Password;

  /**
     * This method will set the hashed password of the user
     * @param hashedPassword The hashed password of the user
     */
  SetHashedPassword = (hashedPassword: string): void => { this.HashedPassword = hashedPassword; };

  /**
     * Getter for the hashed password of the user
     * @returns The hashed password of the user
     */
  GetHashedPassword = (): string => this.HashedPassword;
  // #endregion
}

export default Login;
