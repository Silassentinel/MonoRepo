// #region imports
import ICompressor from 'Interface/ICompressor';
import IEncryptor from 'Interface/IEncryptor';
import IFileWriter from 'Interface/IFileWriter';
import ILogger from 'Interface/ILogger';
import ILoggerParams from 'Interface/ILoggerParams';
import Compressor from './Compressor';
import Encryptor from './Encryptor';
import FileWriter from './FileWriter';
import Logger from './Logger';

// #endregion
// #region config
// #endregion
/**
 * The factory class will contain all the logic and functions to create the objects.
 */

class Factory {
  // #region props
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/setters
  // #endregion
  // #region public methods
  static CreateCompressor(): ICompressor {
    return new Compressor();
  }

  static CreateLogger(loggerparams: ILoggerParams): ILogger {
    // destructure the params object
    const {
      logLevel, toFile, toDb, toConsole, typeOfDB, consoleConfig,
    } = loggerparams;
    return new Logger(logLevel, toFile, toDb, toConsole, typeOfDB, consoleConfig);
  }

  static CreateEncryptor(): IEncryptor {
    return new Encryptor();
  }

  static CreateFileWriter(): IFileWriter {
    return new FileWriter();
  }
  // #endregion
  // #region private helpers
  // #endregion
}

export default Factory;
