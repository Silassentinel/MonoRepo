// #region types
import Client from '@silassentinel/frontendlib/src/types/Client';
import Job from '@silassentinel/frontendlib/src/types/Job';
import Blog from '@silassentinel/frontendlib/src/types/Blog';
// #region imports
import { Hash } from 'crypto';
import { v4 as UUIDV4, V4Options } from 'uuid';
import axios from 'axios';
import { writeFile } from 'fs';
import { readFile } from 'fs/promises';
import ToolBoxError from '../utilities/Errors/ToolBoxError';
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
  static GetKeys = (data: Record<string, string>): string[] => Object.keys(data);

  /**
    *  Helper function to get all the values of an object.
    * @param data {Record<String,String>} object to get values from
    * @returns {string[]} array of values
    */
  static GetValues = (data: Record<string, string>): string[] => Object.values(data);

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
    return UUIDV4({
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

  /**
   * This function will return the domain name of a website
   * @param {string} url the url to get the domain name from
   * @returns {string} the domain name
   */
  // eslint-disable-next-line max-len
  static GetDomainName = (url: string) => url.replace('https://', '').replace('http://', '').replace('www.', '').split(/[/?#]/)[0];

  /**
   * This function will read a local html file and return an array of strings containing all links in the file.
   * @param {string} filePath the file to read.
   * @returns {string[]} array of links
   */
  static GetLinksFromHtmlFile = async (filePath: string): Promise<string[]> => {
    // #region sanitize file path
    const sanitizedFilePath = ToolBox.SanitizeFilePath(filePath);
    if (sanitizedFilePath instanceof ToolBoxError) throw sanitizedFilePath;
    // #endregion
    // #region read file
    const file = await readFile(filePath, 'utf8');
    // #endregion
    // #region get links
    const links = file.match(/href="([^"]*)"/g);
    // #endregion
    // #region return links
    return links as string[];
    // #endregion
  };

  /**
   * This function will download an HTML file via Axios GET request.
   * @param {string} url the url to download the file from
   * @param {string} folder where to save the file
   */
  static DownloadWebPage = async (url: string, folder: string) => {
    // #region sanitize url
    const sanitizedUrl = ToolBox.SanitizeFilePath(url);
    if (sanitizedUrl instanceof ToolBoxError) throw sanitizedUrl;
    const sanitizedFolder = ToolBox.SanitizeFilePath(folder);
    if (sanitizedFolder instanceof ToolBoxError) throw sanitizedFolder;
    // #endregion
    // #region request webpage
    const response = await axios.get(url);
    const { data } = response;
    // #endregion
    // #region write file
    const domain = ToolBox.GetDomainName(url);
    try {
      writeFile(`${folder}/${domain}.html`, data, (err) => {
        if (err) throw err;
      });
    } catch (error) {
      console.error(error);
    }
    // #endregion
  };

  /**
   * This function takes any function as a parameter and executes it every 5 minutes.
   * @param {Function} function the function to execute.
   */
  static ExecuteEveryFiveMinutes = (func: (() => void)) => {
    setInterval(() => func, 300000);
  };

  // #endregion

  // #region react helper methods

  /**
   * This function will convert json to a blog.
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

  /**
   * This function will check a filepath to verify tere is no filepath traversal attack possible.
   * @param filePath the path to the file
   * @returns the filepaht or an error
   */
  static SanitizeFilePath = (filePath: string): string | ToolBoxError => {
    // filepath traversal checks
    if (ToolBox.IsNullOrUndefined(filePath)) return new ToolBoxError('File path is required');
    if (ToolBox.IsStringEmpty(filePath)) return new ToolBoxError('File path is required');
    if (filePath.includes('..')) return new ToolBoxError('File path is invalid');
    // return the file path
    return filePath;
  };

  /**
   * This function will check if a given value is a string.
   * @param value the value to check
   * @returns true if the value is a string
   */
  static IsString = (value : unknown) : boolean => typeof value === 'string';

  // #endregion
}

export default ToolBox;
