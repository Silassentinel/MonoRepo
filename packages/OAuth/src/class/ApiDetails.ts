// #regions imports
import { Hash } from 'crypto';
// #endregion

/**
 * This class is to contain all the details of an api.
 * The objects will be used to bind api's to users.
 */
class ApiDetails {
  // #region props
  /**
     * Api key being used to register the service.
     * @private
     * @string
     */
  private _apiKey!: string| Hash;

  /**
     * Api secret linked to the key
     */
  private _apiSecret!: string | Hash;

  /**
     * Names of the api's endpoints.
     */
  private _apiNames!: string[];

  /**
     * The version or versions of the api's
     */
  private _apiVersion!: string | string[];

  /**
     * Status of the apis
     */
  private _apiStatus!: string;

  /**
     * The endpoints authorized
     */
  private _apiEndpoints!: string;

  // #endregion
  // #region constructor
  public constructor(
    apiKey: string | Hash,
    apiSecret: string | Hash,
    apiNames: string[],
    apiVersion: string | string[],
    apiStatus: string,
    apiEndpoints: string,
  ) {
    this.SetApiKey(apiKey);
    this.SetApiSecret(apiSecret);
    this.SetApiNames(apiNames);
    this.SetApiVersion(apiVersion);
    this.SetApiStatus(apiStatus);
    this.SetApiEndpoints(apiEndpoints);
  }

  // #endregion
  // #region meths
  // #region getters & setters
  GetApiKey = () => this._apiKey;

  SetApiKey = (apiKey: string | Hash) => {
    if (apiKey === undefined || apiKey === null) throw new Error('apiKey is null or undefined');
    this._apiKey = apiKey;
  };

  /**
     * This will return the api secret.
     * @returns {string} api secret
     */
  GetApiSecret = () => this._apiSecret;

  /**
     * This will set the api secret.
     * @param apiSecret {string|Hash} api secret
     */
  SetApiSecret = (apiSecret: string | Hash) => {
    if (apiSecret === undefined || apiSecret === null) throw new Error('apiSecret is null or undefined');
    this._apiSecret = apiSecret;
  };

  /**
     * This will return the api names.
     * @returns {string[]} api names
     */
  GetApiNames = () => this._apiNames;

  /**
     * This will set the api names.
     * @param apiNames {string[]} api names
     */
  SetApiNames = (apiNames: string[]) => {
    if (apiNames === undefined || apiNames === null) throw new Error('apiNames is null or undefined');
    this._apiNames = apiNames;
  };

  /**
     * This will return the api version.
     * @returns {string|string[]} api version
     */
  GetApiVersion = () => this._apiVersion;

  /**
     * This will set the api version.
     * @param apiVersion {string|string[]} api version
     */
  SetApiVersion = (apiVersion: string | string[]) => {
    if (apiVersion === undefined || apiVersion === null) throw new Error('apiVersion is null or undefined');
    this._apiVersion = apiVersion;
  };

  /**
     * This will return the api status.
     * @returns {string} api status
     */
  GetApiStatus = () => this._apiStatus;

  /**
     * This will set the api status.
     * @param apiStatus {string} api status
     */
  SetApiStatus = (apiStatus: string) => {
    if (apiStatus === undefined || apiStatus === null) throw new Error('apiStatus is null or undefined');
    this._apiStatus = apiStatus;
  };

  /**
     * This will return the api endpoints.
     * @returns {string} api endpoints
     */
  GetApiEndpoints = () => this._apiEndpoints;

  /**
     * This will set the api endpoints.
     * @param apiEndpoints {string} api endpoints
     */
  SetApiEndpoints = (apiEndpoints: string) => {
    if (apiEndpoints === undefined || apiEndpoints === null) throw new Error('apiEndpoints is null or undefined');
    this._apiEndpoints = apiEndpoints;
  };
  // #endregion
}

export default ApiDetails;
