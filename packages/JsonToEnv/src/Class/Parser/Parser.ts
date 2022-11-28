// #region imports
import Toolbox from '@silassentinel/toolbox/src/Class/ToolBox';
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
  // #endregion
}

export default Parser;
