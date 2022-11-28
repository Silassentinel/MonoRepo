// #region imports
import DBType from 'Enum/DBType';
import LogLevel from 'Enum/LogLevel';
import IConsoleConfig from './IConsoleConfig';
import IFileWriter from './IFileWriter';
// #endregion
/**
 * This interface will be used to type the params object passed to the Logger class.
 */
interface ILoggerParams {
    consoleConfig: IConsoleConfig;
    fileWriter: IFileWriter;
    logLevel: LogLevel;
    toConsole: boolean;
    toFile: boolean;
    toDb: boolean;
    typeOfDB: DBType;
 }

export default ILoggerParams;
