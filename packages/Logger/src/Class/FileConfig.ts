// #region imports
import IFileConfig from 'Interface/IFileConfig';
import IOutputFormat from 'Interface/IOutputFormat';
import FileConfigError from 'utilities/Errors/FileConfigError';
import COLORS from '../Enum/Colors';
import LAYOUT from '../Enum/Layout';
import MESSAGE_SEPERATOR from '../Enum/MessageSeperator';
// #endregion
/**
 * This class will hold the configuration settings for outputitng to a file.
 */
class FileConfig implements IFileConfig, IOutputFormat {
  // #region props

  private _IsCompressed!: boolean;

  /**
   * This property will hold the flag to format the output to a table or not.
   */
  private _fileName!: string;

  /**
   * This property will hold the flag which controls whether the output is encrypted or not.
   */
  private _fileExtension!:string;

  /**
   * This property will hold the flag which controls whether the output is encrypted or not.
   */
  private _fileLocation!: string;

  /**
   * This property will hold the flag which controls whether the output is encrypted or not.
   */
  private _fileSize!: number;

  /**
   * This property will hold the flag which controls whether the output is encrypted or not.
   */
  private _color!: COLORS;

  /**
   * This property will hold the flag to format the output to a table or not.
   */
  private _table!: boolean;

  /**
   * This property will hold the number of whitelines that will be inserted between each line of the output.
   */
  private _spacing!: number;

  /**
   * This property will hold the messages seperator.
   */
  private _messageSeperator!: MESSAGE_SEPERATOR;

  /**
   * This property will hold the layout of the output.
   */
  private _layout!: LAYOUT;

  /**
   * This property will hold the flag which controls whether the output is encrypted or not.
   */
  private _isEncrypted!: boolean;

  // #endregion
  // #region ctor
  constructor(
    fileName: string,
    fileExtension: string,
    fileLocation: string,
    fileSize: number,
    color: COLORS,
    table: boolean,
    spacing: number,
    messageSeperator: MESSAGE_SEPERATOR,
    layout: LAYOUT,
    isEncrypted: boolean,
  ) {
    this.SetColor(color);
    this.SetIsEncrypted(isEncrypted);
    this.SetIsTable(table);
    this.SetSpacing(spacing);
    this.SetMessageSeperator(messageSeperator);
    this.SetLayout(layout);
    this.SetFileName(fileName);
    this.SetFileExtension(fileExtension);
    this.SetFileLocation(fileLocation);
    this.SetFileSize(fileSize);
  }

  // #endregion
  // #region methods
  // #region getters/Setters
  /**
   * This function will return true if the file should be compressed.
   */
  GetIsCompressed = (): boolean => this._IsCompressed;

  /**
   * This function will return the flag which controls whether the output is encrypted or not.
   * @returns {boolean} isEncrypted
   */
  GetIsEncrypted = (): boolean => this._isEncrypted;

  /**
   * This function will return the name of the file
   * @returns {string} fileName
   */
  GetFileName = () : string => this._fileName;

  /**
   * This function will return the extension of the file
   * @returns {string} fileExtension
   */
  GetFileExtension = ():string => this._fileExtension;

  /**
   * This function will return the location of the file.
   * @returns {string} fileLocation
   */
  GetFileLocation = () : string => this._fileLocation;

  /**
   * This function will set the fileSize after it's been converted to bytes.
   * @returns {number} fileSize
   */
  GetFileSize = () : number => this._fileSize;

  /**
   * This function will return the color of the output.
   * @returns {COLORS} color of the output
   */
  GetColor = (): COLORS => this._color;

  /**
   * This function will return the flag to format the output to a table or not.
   * @returns {boolean} True for formatting as a table
   */
  GetIsTable = (): boolean => this._table;

  /**
   * This function will return the number of whitelines that will be inserted between each line of the output.
   * @returns {number} The number of whitelines that will be inserted between each line of the output.
   */
  GetSpacing = (): number => this._spacing;

  /**
   * This function will return the seperator of the messages in the output.
   * @returns {MESSAGE_SEPERATOR} The messages seperator.
   */
  GetMessageSeperator = (): MESSAGE_SEPERATOR => this._messageSeperator;

  /**
   * This function will return the layout of the output.
   * @returns {LAYOUT} The layout of the output.
   */
  GetLayout = (): LAYOUT => this._layout;

  // --------------------------------

  /**
   *
   */
  SetIsCompressed = (isCompressed: boolean): void => {
    this._IsCompressed = isCompressed;
  };

  /**
   * This function will set the name of the file.
   * @param fileName {string} The name of the file.
   */
  SetFileName = (fileName: string) => {
    // check for path traversal
    if (fileName.includes('..')) {
      throw new FileConfigError(
        'Only Absolut paths',
        'Path traversal is not allowed.',
        new Error().stack,
        'FileConfig SetFileName',
      );
    }
    this._fileName = fileName;
  };

  /**
   * This function will set the extension of the file.
   * @param fileExtension {string} The extension of the file.
   */
  SetFileExtension = (fileExtension: string) => {
    // check if the extension starts with a dot
    // followed by a letter
    if (fileExtension.startsWith('.') && fileExtension[1].match(/[a-zA-Z]/i)) {
      this._fileExtension = fileExtension;
    }
  };

  /**
   * This function will set the location of the file.
   * Only absolute paths are supported.
   * @param fileLocation {string} The location of the file.
   */
  SetFileLocation = (fileLocation: string) => {
    // check to avoid path traversal
    if (fileLocation.includes('..')) {
      throw new FileConfigError(
        'No Relative paths',
        'Relative paths are not supported.',
        new Error().stack,
        'FileConfig.SetFileLocation',
      );
    }
    this._fileLocation = fileLocation;
  };

  /**
   * This function will set the fileSize in bytes.
   * @param fileSize {number} The size of the file in bytes.
   */
  SetFileSize = (fileSize: number) => { this._fileSize = fileSize; };

  /**
   * This function will set the flag to encrypt the output or not.
   * @param isEncrypted Wheter or not the output is encrypted
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
   * @param messageSeperator How messages will be seperated in the output.
   */
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

export default FileConfig;
