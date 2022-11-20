// #region imports
import ToolBoxError from 'utilities/Errors/ToolBoxError';
import UUIDV4, { V4Options } from 'uuid';

// #region types
import Client from '@silassentinel/frontendlib/src/types/Client';
import Job from '@silassentinel/frontendlib/src/types/Job';
import Blog from '@silassentinel/frontendlib/src/types/Blog';
import { Hash } from 'crypto';
// #endregion

// #endregion

class ToolBox {
  // #region static methods
  /**
   * This function will be used to check if the given string is empty.
   * @param str string to check
   * @returns {boolean} true if string is empty
   */
  static IsStringEmpty = (str: string): boolean => str.length === 0;

  /**
   * This will check if the given object is undefined or null.
   * @param obj object to check
   * @returns {boolean} true if object is undefined or null
   */
  static IsNullOrUndefined = (obj: unknown): boolean => obj === undefined || obj === null;

  /**
    * Helper function to get all the keys of an object.
    * @param data {Record<String,String>} object to get keys from
    * @returns {string[]} array of keys
    */
  static getKeys = (data: Record<string, string>): string[] => Object.keys(data);

  /**
    *  Helper function to get all the values of an object.
    * @param data {Record<String,String>} object to get values from
    * @returns {string[]} array of values
    */
  static getValues = (data: Record<string, string>): string[] => Object.values(data);

  /**
   * This function will create an apî key for the given user.
   * @param user {string} user to create api key for
   * @param password {string|Hash} password of the user
   * @param email {string} email of the user
   * @returns {string} api key
   */
  static GenerateApiKey = (user: string, password: string|Hash, email: string): string => {
    if (!user) throw new ToolBoxError('User is required');
    if (!password) throw new ToolBoxError('Password is required');
    if (!email) throw new ToolBoxError('Email is required');
    return UUIDV4.v4({
      node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
      clockseq: 0x1234,
      msecs: new Date('2011-11-01').getTime(),
    } as V4Options);
  };

  /**
   * This function will get the current year
   * @returns the current year
   */
  static GetCurrentYear = () => new Date().getFullYear();
  // #endregion

  // #region react helper methods

  /**
   * this function will convert json to a blog
   * @param jsonFile the json file to convert
   * @returns the new blog
   */
  static JsonToBlog = (jsonFile: string): Blog[] => JSON.parse(jsonFile) as Blog[];

  /**
   * This function will convert JSON to a job posting
   * @param jsonFile the json file to convert
   * @returns the new job posting
   */
  static JsonToJob = (jsonFile: string) => JSON.parse(jsonFile) as Job[];

  /**
   * This function will convert json to a new client Card
   * @param jsonFile the json file to convert
   * @returns the new client card
   */
  static JsonToNewClient = (jsonFile: string) => JSON.parse(jsonFile) as Client[];

  // #endregion
}

export default ToolBox;
