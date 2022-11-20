// #region imports
import { Hash } from 'crypto';
import RegisterError from 'utilities/Errors/RegisterError';
import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
import ApiDetails from './ApiDetails';
// #endregion

/**
 * This class will be used a model for the registration of services over the api backend.
 */
class Register {
  // #region props
  /**
     * Username of the user that is registering the service.
     * @private
     * @string
     */
  private _username!: string;

  /**
     * Password of the user that is registering the service.
     * @private
     * @string
     */
  private _password!: string|Hash;

  /**
     * A collection to hold all the api details which are approved for the user.
     */
  private _apiDetails!: ApiDetails[];

  // #endregion
  // #region constructor
  public constructor(username: string, password: string, apiDetails: ApiDetails[]) {
    this._username = username;
    this._password = password;
    this._apiDetails = apiDetails;
  }

  // #endregion
  // #region meths
  // #region getters & setters

  /**
     * Get the username of the user that is registering the service.
     * @returns {string} - The username of the user that is registering the service.
     */
  GetUserName = (): string => this._username;

  /**
     * Set the username of the user that is registering the service.
     * @param userName - The username of the user that is registering the service.
     */
  SetUserName = (userName: string) => {
    if (ToolBox.IsStringEmpty(userName)) throw new RegisterError('username is null or undefined');
    this._username = userName;
  };

  /**
     * Get the password of the user that is registering the service.
     * @returns {string} - The password of the user that is registering the service.
     */
  GetPassword = (): string |Hash => this._password;

  /**
     * Set the password of the user that is registering the service.
     * @param password - The password of the user that is registering the service.
     */
  SetPassword = (password: string |Hash) => {
    if (ToolBox.IsStringEmpty(password as string)) throw new RegisterError('password is null or undefined');

    this._password = password;
  };

  /**
   * Get the api details of the user that is registering the service.
   * @returns {ApiDetails[]} - The collection to hold all the api details which are approved for the user.
   */
  GetApiDetails = () : ApiDetails[] => this._apiDetails;

  /**
     * Set the api details of the user that is registering the service.
     * @param apiDetails - The collection to hold all the api details which are approved for the user.
     */
  SetApiDetails = (apiDetails: ApiDetails[]) => {
    if (apiDetails === undefined || apiDetails === null) throw new RegisterError('apiDetails is null or undefined');
    this._apiDetails = apiDetails;
  };
  // #endregion
  // #endregion
}

export default Register;
