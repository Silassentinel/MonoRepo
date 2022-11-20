/* eslint-disable no-unused-vars */
// #region imports
import COLORS from '../Enum/Colors';
import LAYOUT from '../Enum/Layout';
import MESSAGE_SEPERATOR from '../Enum/MessageSeperator';
// #endregion
/**
 * This interface will be the blueprint for the fileconfig class.
 */
interface IFileConfig {
  // #region props
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/Setters

  /**
   * This function will return the flag which controls whether the output is encrypted or not.
   * @returns {boolean} isEncrypted
   */
  GetIsEncrypted : () => boolean;

  /**
   * This function will return the name of the file
   * @returns {string} fileName
   */
  GetFileName : () => string;

  /**
   * This function will return the extension of the file
   * @returns {string} fileExtension
   */
  GetFileExtension : () => string;

  /**
   * This function will return the location of the file.
   * @returns {string} fileLocation
   */
    GetFileLocation: () => string;

  /**
   * This function will set the fileSize after it's been converted to bytes.
   * @returns {number} fileSize
   */
  GetFileSize : () => number;

  /**
   * This function will return the color of the output.
   * @returns {COLORS} color of the output
   */
  GetColor : () => COLORS;

  /**
   * This function will return the flag to format the output to a table or not.
   * @returns {boolean} True for formatting as a table
   */
  GetIsTable : ()=> boolean;

  /**
   * This function will return the number of whitelines that will be inserted between each line of the output.
   * @returns {number} The number of whitelines that will be inserted between each line of the output.
   */
  GetSpacing : () => number;

  /**
   * This function will return the seperator of the messages in the output.
   * @returns {MESSAGE_SEPERATOR} The messages seperator.
   */
  GetMessageSeperator : () => MESSAGE_SEPERATOR;

  /**
   * This function will return the layout of the output.
   * @returns {LAYOUT} The layout of the output.
   */
  GetLayout : ()=> LAYOUT;

  // --------------------------------

  /**
   * This function will set the name of the file.
   * @param fileName {string} The name of the file.
   */
  SetFileName : (fileName: string) => void;

  /**
   * This function will set the extension of the file.
   * @param fileExtension {string} The extension of the file.
   */
  SetFileExtension : (fileExtension: string) => void;

  /**
   * This function will set the location of the file.
   * Only absolute paths are supported.
   * @param fileLocation {string} The location of the file.
   */
  SetFileLocation : (fileLocation: string) => void;

  /**
   * This function will set the fileSize in bytes.
   * @param fileSize {number} The size of the file in bytes.
   */
  SetFileSize : (fileSize: number) => void;

  /**
   * This function will set the flag to encrypt the output or not.
   * @param isEncrypted Wheter or not the output is encrypted
   */
  SetIsEncrypted : (isEncrypted: boolean) => void;

  /**
   * This function will set the color of the output.
   * @param color The color of the output.
   */
  SetColor : (color: COLORS)=> void;

  /**
   * This function will set the flag to format the output to a table or not.
   * @param table Format the output as a table or not.
   */
  SetIsTable : (table: boolean) => void;

  /**
   * This function will set the number of whitelines that will be inserted between each line of the output.
   * @param spacing The number of whitelines that will be inserted between each line of the output.
   */
  SetSpacing : (spacing: number) => void;

  /**
   * This function will set the seperator of the messages in the output.
   * @param messageSeperator How messages will be seperated in the output.
   */
  SetMessageSeperator : (messageSeperator: MESSAGE_SEPERATOR) => void;

  /**
   * This function will set the layout of the output.
   * @param layout The layout of the output.
   */
  SetLayout : (layout: LAYOUT)=> void;
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default IFileConfig;
