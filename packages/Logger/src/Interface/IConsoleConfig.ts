/* eslint-disable no-unused-vars */
// #region imports
// #endregion
// #region imports
import MESSAGE_SEPERATOR from 'Enum/MessageSeperator';
import COLORS from '../Enum/Colors';
import LAYOUT from '../Enum/Layout';
// #endregion
/**
 * This class will help to configure the console logger.
 * Colors, symbols, spacing, layout, table.
 * Which is used to format the output to the console
 */
interface IConsoleConfig {
  // #region props
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/Setters
  /**
   * This function will return the flag which controls whether the output is encrypted or not.
   * @returns {boolean} Whether the output is encrypted or not.
   */
  GetIsEncrypted : ()=> boolean;

  /**
    * This function will return the color of the output.
    * @returns {COLORS} color
    * @static
    */

  GetColor : ()=> COLORS;

  /**
    * This function will set the color of the output.
    * @returns {boolean} table
    * @static
    */
  GetIsTable : ()=> boolean;

  /**
    * This function will set the color of the output.
    * @param {COLORS} color
    * @static
    */
  GetSpacing : () => number;

  /**
    * This function will set the seperator of the messages in the output.
    * @returns {MESSAGE_SEPERATOR} messageSeperator
    * @static
    */
  GetMessageSeperator : ()=> MESSAGE_SEPERATOR;

  /**
    * This function will set the layout of the output.
    * @returns {LAYOUT} layout
    */
  GetLayout : ()=> LAYOUT;

  // ------------------------------

  /**
   * This function will set the encryption flag.
   * @param isEncrypted {boolean} Whether the output is encrypted or not.
   */
SetIsEncrypted: (isEncrypted: boolean) => void;

  /**
    * This function will set the color of the output.
    * @param color The color of the output.
    */
  SetColor : (color: COLORS)=> void;

  /**
    * This function will set the flag to format the output to a table or not.
    * @param table Format the output as a table or not.
    */
  SetIsTable : (table: boolean)=> void;

  /**
    * This function will set the number of whitelines that will be inserted between each line of the output.
    * @param spacing The number of whitelines that will be inserted between each line of the output.
    */
  SetSpacing : (spacing: number) => void;

  /**
    * This function will set the seperator of the messages in the output.
    * @param messageSeperator The seperator of the messages in the output.
    */
  // eslint-disable-next-line max-len
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

export default IConsoleConfig;
