// #region types
import Client from '@silassentinel/frontendlib/src/types/Client';
import Job from '@silassentinel/frontendlib/src/types/Job';
import Blog from '@silassentinel/frontendlib/src/types/Blog';
// #endregion
// #region imports
import { Hash } from 'crypto';
import { v4 as UUIDV4, V4Options } from 'uuid';
import { ExecException, exec } from 'node:child_process';
import ToolBoxError from '../utilities/Errors/ToolBoxError';
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
   * This function will check if git is installed on the system, if it's installed it will return the version of git.
   * @return {Promise<boolean>} A promise that resolve to true if git is installed, or false if not
   */
  static IsGitInstalled = async () => {
    const git = await ToolBox.Execute('git --version');
    if (!git) {
      return false;
    }
    return true;
  };

  /**
   * This function will check which os is running.
   * @returns {Promise<string>} A promise that resolve to the os type
   */
  static GetOS = async (): Promise<string> => {
    const os = await import('os');
    const osFlavor = os.type().toLowerCase();
    if (osFlavor === 'linux') return 'linux';
    if (osFlavor === 'darwin') return 'mac';
    if (osFlavor === 'windows_NT') return 'windows';
    return osFlavor;
  };

  /**
 * @param {string} command A shell command to execute
 * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
 * @example const output = await execute("ls -alh");
 */
  static Execute = (command: string) =>
    /**
     * @param {Function} resolve A function to call when the shell command is executed successfully
     * @param {Function} reject A function to call when the shell command is executed with an error
     * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
     */
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve, reject) => {
    /**
     * @param {Error} error An error triggered during the execution of the childProcess.exec command
     * @param {string|Buffer} standardOutput The result of the shell command execution
     * @param {string|Buffer} standardError The error resulting of the shell command execution
     * @see https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
     */
      exec(command, (error : ExecException | null, standardOutput : string, standardError: string) => {
        if (error) {
          reject();
          return;
        }
        if (standardError) {
          reject(standardError);
          return;
        }
        resolve(standardOutput);
      });
    });

  /**
   * This function will run every 5 minutes. It takes a function as parameter and will execute it every 5 minutes.
   * @param {Function} func The function to execute every 5 minutes.
   */
  static runEveryFiveMinutes = (func: (p1?: string, p2?: string) => any) => {
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
