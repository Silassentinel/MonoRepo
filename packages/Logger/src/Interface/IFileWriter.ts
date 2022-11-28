/* eslint-disable no-unused-vars */
// #region imports
import IFileConfig from './IFileConfig';
// #endregion
/**
 * This interface will be the blueprint for the filewrite class.
 */
interface IFileWriter {
  // #region props
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/setters
  /**
     * This function returns the FileConfig object.
     * @returns {FileConfig} fileConfig
     */
  GetFileConfig : () => IFileConfig;
  // ------------------------------

  /**
     * This function sets the fileconfig object.
     * @param fileConfig {FileConfig}
     */
  SetFileConfig : (fileConfig: IFileConfig)=> void;

  // #endregion
  // #region public methods
  /**
   * This function will write the data to a file using the file config variable.
   * applying all the formatting and settings within the file config.
   * @param data data to be written to the file.
   * @async
   */
  Write : (data: string)=> void;
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default IFileWriter;
