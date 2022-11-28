// #region imports
import ConsoleConfig from 'Class/ConsoleConfig';
import DBType from 'Enum/DBType';
import LogLevel from 'Enum/LogLevel';
import IFileWriter from './IFileWriter';
// #endregion
/**
 * This interface will be used to type the params object passed to the Logger class.
 */
interface ILoggerParams {
    consoleConfig: ConsoleConfig;
    fileWriter: IFileWriter;
    logLevel: LogLevel;
    toConsole: boolean;
    toFile: boolean;
    toDb: boolean;
    typeOfDB: DBType;
 }

export default ILoggerParams;
