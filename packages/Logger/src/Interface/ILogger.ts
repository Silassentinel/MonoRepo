/* eslint-disable no-unused-vars */
// #region imports
import LogLevel from '../Enum/LogLevel';
import DBType from '../Enum/DBType';
import ConsoleConfig from '../Class/ConsoleConfig';
// import DBConfig from './DBConfig'; // TODO: add DBConfig
import FileWriter from '../Class/FileWriter';
// #endregion
/**
 * This interface is the blueprint for the logger class
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
interface ILogger {
  // #region props
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  /**
   * This function will log the message.
   * @param message {string} message to be logged.
   * @param logLevel {LogLevel} log level of the message.
   * @param optionalParams {any[]} optional parameters to be logged.
   */
  Log: (logLevel: LogLevel, message: string, ...optionalParams: any[]) => void;
  // #region getters/Setters

  /**
   * This function will return the fileWriter if and only if the toFile flag is set to true.
   * @returns {FileWriter} fileWriter
   */
  GetFileWriter : () => (FileWriter | null);

  /**
    * This function will set the ConsoleConfig object.
    * @returns {ConsoleConfig} consoleConfig
    */
  GetConsoleConfig : () => ConsoleConfig;

  /**
    * This function will return the type of db to log to.
    * @returns {DBType} typeOfDB
    */
  GetBDBType : () => DBType;

  /**
    * This function will return the flag to write to console or not.
    * @returns {boolean} toConsole
    */
  GetIsToConsole : () => boolean;

  /**
    * This function will return the flag to write to DB or not.
    * @returns {boolean} toDb
    */
  GetIsToDB : () => boolean;

  /**
    * This function will return the flag to write to file or not.
    * @returns {boolean} toFile
    */
  GetIsToFile : () => boolean;

  /**
    * This function will return the log level.
    * @returns {LogLevel} logLevel
    */
  GetLogLevel : () => LogLevel;

  //--------------------------

  /**
   * This function will set the fileWriter object but will show a messagebox.
   * or log a line to the console if the toFile flag is set to false and toConsole flag is set to true.
   */
  SetFileWriter : (fileWriter: FileWriter) => void;

  /**
    * This function will set the ConsoleConfig object.
    * @param consoleConfig
    */
  SetConsoleConfig : (consoleConfig: ConsoleConfig) => void;

  /**
    * This function will set the type of db to log to.
    * @param typeOfDB
    */
  SetDBType : (typeOfDB: DBType) => void;

  /**
    * This function will set the flag to write to console or not.
    * @param toConsole
    */
  SetIsToConsole : (toConsole: boolean) => void;

  /**
    * This function will set the flag to write to DB or not.
    * @param toDb
    */
  SetIsToDB : (toDb: boolean) => void;

  /**
    * This function will set the flag to write to file or not.
    * @param toFile
    */
  SetIsToFile : (toFile: boolean) => void;

  /**
    * This function will set the log level.
    * @param logLevel
    */
  SetLogLevel : (logLevel: LogLevel) => void;
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default ILogger;
