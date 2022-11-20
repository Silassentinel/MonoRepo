// #region imports
import MESSAGE_SEPERATOR from 'Enum/MessageSeperator';
import IConsoleConfig from 'Interface/IConsoleConfig';
import IConsoleConfigParams from 'Interface/IConsoleConfigParams';
import IOutputFormat from 'Interface/IOutputFormat';
import COLORS from '../Enum/Colors';
import LAYOUT from '../Enum/Layout';
// #endregion
/**
 * This class will help to configure the console logger.
 * Colors, symbols, spacing, layout, table.
 * Which is used to format the output to the console
 */

class ConsoleConfig implements IConsoleConfig, IOutputFormat {
  // #region props
  /**
   * This property will hold the flag which controls whether the output is encrypted or not.
   */
  private _isEncrypted!: boolean;

  /**
     * This property will hold the color of the output.
     * @private
     * @static
     * @type {COLORS}
     */
  private _color!: COLORS;

  /**
     * This property will hold the flag to format the output to a table or not.
     * @private
     * @static
     * @type {boolean}
     */
  private _table!: boolean;

  /**
     * This property will hold the number of whitelines that will be inserted between each line of the output.
     * @private
     * @static
     * @type {number}
     */
  private _spacing!: number;

  /**
     * This property will hold the messages seperator.
     * @private
     * @static
     * @type {MESSAGE_SEPERATOR}
     */
  private _messageSeperator!: MESSAGE_SEPERATOR;

  /**
     * This property will hold the layout of the output.
     * @private
     * @static
     * @type {LAYOUT}
     */
  private _layout!: LAYOUT;

  // #endregion
  // #region ctor

  constructor(consoleConfig :IConsoleConfigParams) {
    this.SetColor(consoleConfig.color);
    this.SetIsEncrypted(consoleConfig.isEncrypted);
    this.SetIsTable(consoleConfig.table);
    this.SetSpacing(consoleConfig.spacing);
    this.SetMessageSeperator(consoleConfig.messageSeperator);
    this.SetLayout(consoleConfig.layout);
  }

  // #endregion
  // #region methods
  // #region getters/Setters
  /**
   * This function will return the flag which controls whether the output is encrypted or not.
   * @returns {boolean} Whether the output is encrypted or not.
   */
  GetIsEncrypted = (): boolean => this._isEncrypted;

  /**
    * This function will return the color of the output.
    * @returns {COLORS} color
    * @static
    */

  GetColor = (): COLORS => this._color;

  /**
    * This function will set the color of the output.
    * @returns {boolean} table
    * @static
    */
  GetIsTable = (): boolean => this._table;

  /**
    * This function will set the color of the output.
    * @param {COLORS} color
    * @static
    */
  GetSpacing = (): number => this._spacing;

  /**
    * This function will set the seperator of the messages in the output.
    * @returns {MESSAGE_SEPERATOR} messageSeperator
    * @static
    */
  GetMessageSeperator = (): MESSAGE_SEPERATOR => this._messageSeperator;

  /**
    * This function will set the layout of the output.
    * @returns {LAYOUT} layout
    */
  GetLayout = (): LAYOUT => this._layout;

  // ------------------------------

  /**
   * This function will set the encryption flag.
   * @param isEncrypted {boolean} Whether the output is encrypted or not.
   */
  SetIsEncrypted = (isEncrypted: boolean): void => { this._isEncrypted = isEncrypted; };

  /**
    * This function will set the color of the output.
    * @param color The color of the output.
    */
  SetColor = (color: COLORS): void => { this._color = color; };

  /**
    * This function will set the flag to format the output to a table or not.
    * @param table Format the output as a table or not.
    */
  SetIsTable = (table: boolean): void => { this._table = table; };

  /**
    * This function will set the number of whitelines that will be inserted between each line of the output.
    * @param spacing The number of whitelines that will be inserted between each line of the output.
    */
  SetSpacing = (spacing: number): void => { this._spacing = spacing; };

  /**
    * This function will set the seperator of the messages in the output.
    * @param messageSeperator The seperator of the messages in the output.
    */
  // eslint-disable-next-line max-len
  SetMessageSeperator = (messageSeperator: MESSAGE_SEPERATOR): void => { this._messageSeperator = messageSeperator; };

  /**
    * This function will set the layout of the output.
    * @param layout The layout of the output.
    */
  SetLayout = (layout: LAYOUT): void => { this._layout = layout; };
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default ConsoleConfig;
