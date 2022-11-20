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
    logLevel: LogLevel;
    toFile: boolean;
    toDb: boolean;
    toConsole: boolean;
    typeOfDB: DBType;
    consoleConfig: IConsoleConfig;
    fileWriter: IFileWriter;
 }

export default ILoggerParams;
