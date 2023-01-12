// #region imports
import Toolbox from '@silassentinel/toolbox/src/Class/ToolBox';
// import ToolBoxError from '@silassentinel/toolbox/src/utilities/Errors/ToolBoxError';
import dotenv from 'dotenv';
// #endregion
// #region config
dotenv.config();
// #endregion

/**
 * This class will be responsible for parsing the json file and converting it
 * at run time to sytem environment variables.
 */
class Parser {
  // #region props
  /**
   * Jobject after parsing
   */
  jobject!: [key: string, value: string];

  /**
     * Path to the json file.
     * @type {string}
     */
  pathToJsonFile!: string;

  // #endregion
  // #region ctor
  constructor(pathToJsonFile: string) {
    const sanitizedPath = Toolbox.SanitizeFilePath(pathToJsonFile);
    if (Toolbox.IsString(sanitizedPath)) this.pathToJsonFile = sanitizedPath as string;
  }

  // #endregion
  // #region methods
  // #region getters/setters
  // #endregion
  // #region public methods
  public parseJsonFile = async () => {
    // #region sanitize
    if (!this.pathToJsonFile) throw new Error('Invalid path to json file.');
    this.pathToJsonFile = Toolbox.SanitizeFilePath(this.pathToJsonFile).toString();
    // #endregion

    // #region read json file
    const jsonFile = await Toolbox.ReadJsonFile(this.pathToJsonFile);
    // #endregion

    // #region parse json file
    this.jobject = JSON.parse(jsonFile.toString());
    // #endregion

    // #region set environment variables
    this.SetEnvironmentVariables();
    // #endregion
  };

  /**
   * This method will set the environment variables.
   */
  private SetEnvironmentVariables = () => {
    Object.keys(this.jobject).forEach((key: string) => {
      process.env[key] = this.jobject[key];
    });
  };
  // #endregion
}

export default Parser;
