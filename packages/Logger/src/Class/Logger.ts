/* eslint-disable no-console */
// #region imports
import ILogger from 'Interface/ILogger';
import LoggerError from 'utilities/Errors/LoggerError';
import LogLevel from '../Enum/LogLevel';
import DBType from '../Enum/DBType';
import ConsoleConfig from './ConsoleConfig';
// import DBConfig from './DBConfig'; // TODO: add DBConfig
import FileWriter from './FileWriter';

// #endregion
/**
 * This class is the logger class
 * it has sereral methods:
 * Log to the console
 * Log to a file:
 * - Json
 * - Text
 * - Html
 * - Csv
 * - Xml
 * Log to a database:
 * - Sql
 * - Mongo
 * - Postgres
 * - Mysql
 */
class Logger implements ILogger {
  // #region props
  /**
     * This property will hold the log level.
     * @private
     * @type {LogLevel}
     */
  private _logLevel!: LogLevel;

  /**
     * This property will hold the flag to write to file or not.
     * @private
     * @type {boolean}
     */
  private _toFile!:boolean;

  /**
     * This property holds the flag to write to a database or not.
     * @private
     * @type {boolean}
     */
  private _toDb!:boolean;

  /**
     * This property will hold the flag to log to console or not.
     * @private
     * @type {boolean}
     */
  private _toConsole!: boolean;
  // ------------------------------

  /**
     * This property will hold the type of db to log to.
     * @private
     * @type {DBType}
     */
  private _typeOfDB!: DBType;

  /**
     * This property will hold the console config object which is used to format the output to the console.
     * @private
     * @type {ConsoleConfig}
     */
  private _consoleConfig!: ConsoleConfig;

  /**
   * This property will hold the file writer object.
   * can only be used if the toFile flag is set to true.
   */
  private _fileWriter!: FileWriter;

  // #endregion
  // #region ctor
  constructor(
    logLevel?: LogLevel,
    toFile?: boolean,
    toDb?: boolean,
    toConsole?: boolean,
    typeOfDB?: DBType,
    consoleConfig?: ConsoleConfig,
    // fileConfig: FileConfig,
  ) {
    if (logLevel) {
      this.SetLogLevel(logLevel);
    }
    if (toFile) {
      this.SetIsToFile(toFile);
    }
    if (toDb) {
      this.SetIsToDB(toDb);
    }
    if (toConsole) {
      this.SetIsToConsole(toConsole);
    }
    if (typeOfDB) {
      this.SetDBType(typeOfDB);
    }
    if (consoleConfig) {
      this.SetConsoleConfig(consoleConfig);
    }
  }

  // #endregion
  // #region methods
  /**
   * This function will log the message.
   * @param message {string} message to be logged.
   * @param logLevel {LogLevel} log level of the message.
   * @param optionalParams {string[]} optional parameters to be logged.
   */
  Log = (message: string/* , ...optionalParams: string[] */) => {
    if (this.GetIsToConsole()) {
      if (this.GetLogLevel() === LogLevel.Debug) {
        console.debug(message);
      }
      if (this.GetLogLevel() === LogLevel.Error) {
        console.error(message);
      }
      if (this.GetLogLevel() === LogLevel.Info) {
        console.info(message);
      }
      if (this.GetLogLevel() === LogLevel.Warning) {
        console.warn(message);
      }
      if (this.GetLogLevel() === LogLevel.Fatal) {
        console.error(message);
      }
    }
    if (this.GetIsToFile()) {
      this.GetFileWriter()?.Write(message);
    }
    if (this.GetIsToDB()) {
      throw new LoggerError(
        'Logger - Log',
        'Logging to DB is not implemented yet.',
        new Error()?.stack,
        'Not implemented yet.',
      );
    }
  };

  // #region getters/Setters

  /**
   * This function will return the fileWriter if and only if the toFile flag is set to true.
   * @returns {FileWriter} fileWriter
   */
  GetFileWriter = (): FileWriter | null => {
    if (this.GetIsToFile()) {
      return this._fileWriter;
    }
    return null;
  };

  /**
    * This function will set the ConsoleConfig object.
    * @returns {ConsoleConfig} consoleConfig
    */
  GetConsoleConfig = () : ConsoleConfig => this._consoleConfig;

  /**
    * This function will return the type of db to log to.
    * @returns {DBType} typeOfDB
    */
  GetBDBType = (): DBType => this._typeOfDB;

  /**
    * This function will return the flag to write to console or not.
    * @returns {boolean} toConsole
    */
  GetIsToConsole = () => this._toConsole;

  /**
    * This function will return the flag to write to DB or not.
    * @returns {boolean} toDb
    */
  GetIsToDB = () => this._toDb;

  /**
    * This function will return the flag to write to file or not.
    * @returns {boolean} toFile
    */
  GetIsToFile = () => this._toFile;

  /**
    * This function will return the log level.
    * @returns {LogLevel} logLevel
    */
  GetLogLevel = () => this._logLevel;

  //--------------------------

  /**
   * This function will set the fileWriter object but will show a messagebox.
   * or log a line to the console if the toFile flag is set to false and toConsole flag is set to true.
   */
  SetFileWriter = (fileWriter: FileWriter): void => {
    this._fileWriter = fileWriter;
  };

  /**
    * This function will set the ConsoleConfig object.
    * @param consoleConfig
    */
  SetConsoleConfig = (consoleConfig: ConsoleConfig) => { this._consoleConfig = consoleConfig; };

  /**
    * This function will set the type of db to log to.
    * @param typeOfDB
    */
  SetDBType = (typeOfDB: DBType) => { this._typeOfDB = typeOfDB; };

  /**
    * This function will set the flag to write to console or not.
    * @param toConsole
    */
  SetIsToConsole = (toConsole: boolean) => { this._toConsole = toConsole; };

  /**
    * This function will set the flag to write to DB or not.
    * @param toDb
    */
  SetIsToDB = (toDb: boolean) => { this._toDb = toDb; };

  /**
    * This function will set the flag to write to file or not.
    * @param toFile
    */
  SetIsToFile = (toFile: boolean) => {
    this._toFile = toFile;
  };

  /**
    * This function will set the log level.
    * @param logLevel
    */
  SetLogLevel = (logLevel: LogLevel) => { this._logLevel = logLevel; };
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default Logger;
