// #region imports
import Toolbox from '@silassentinel/toolbox/src/Class/ToolBox';
import ToolBoxError from '@silassentinel/toolbox/src/utilities/Errors/ToolBoxError';
// #endregion
// #region config
// #endregion

/**
 * This class will be responsible for parsing the json file and converting it
 * at run time to sytem environment variables.
 */
class Parser {
  // #region props
  /**
     * Path to the json file.
     * @type {string}
     */
  pathToJsonFile!: string;

  // #endregion
  // #region ctor
  constructor(pathTojsonFile: string) {
    const sanitizedPath = Toolbox.SanitizeFilePath(pathTojsonFile);
    if (Toolbox.IsString(sanitizedPath)) this.pathToJsonFile = sanitizedPath as string;
  }
  // #endregion
  // #region methods
  // #region getters/setters
  // #endregion
  // #region public methods
  // #endregion
  // #region private helpers

  /**
   * This method will be responsible for parsing the json file and converting it
   * at run time to sytem environment variables.
   * @param {string} pathToJsonFile Path to the json file.
   * @returns {void}
   */
  private parseJsonFile = async () => {
    // #region sanitize
    if (!Toolbox.IsStringEmpty(this.pathToJsonFile)) throw new Error('Invalid path to json file.');
    const toolboxError = Toolbox.SanitizeFilePath(this.pathToJsonFile);
    if (toolboxError instanceof ToolBoxError) throw toolboxError;
    // #endregion

    // #region read json file
    const jsonFile = await Toolbox.ReadJsonFile(this.pathToJsonFile);
    if (jsonFile instanceof ToolBoxError) throw jsonFile;
    // #endregion

    // #region parse json file
    const json = JSON.parse(jsonFile as string);
    // #endregion

    // #region set environment variables
    this.SetEnvironmentVariables(json);
    // #endregion
  };

  private SetEnvironmentVariables = (json: any) => {
    Object.keys(json).forEach((key) => {
      process.env[key] = json[key];
    });
  };
  // #endregion
}

export default Parser;
