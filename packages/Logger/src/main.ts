// #region imports
import ConsoleConfig from 'Class/ConsoleConfig';
import Factory from 'Class/Factory';
import COLORS from 'Enum/Colors';
import DBType from 'Enum/DBType';
import LAYOUT from 'Enum/Layout';
import LogLevel from 'Enum/LogLevel';
import MESSAGE_SEPERATOR from 'Enum/MessageSeperator';
import ILoggerParams from 'Interface/ILoggerParams';
// #endregion
// This is the main entry point of the application

// yargs:
/*
File = -F
DB = -D
DBType = -T
Console = -C
LogLevel = -L
Color = -C
Table = -T
Spacing = -S
MessageSeperator = -M
Layout = -L
Help = -H
*/

const main = async (args) => {
  // #region args
  const { argv } = args
    .usage('Usage: $0 [options]')
    .option('F', {
      alias: 'File',
      describe: 'File',
      type: 'string',
    })
    .option('D', {
      alias: 'DB',
      describe: 'DB',
      type: 'string',
    })
    .option('T', {
      alias: 'DBType',
      describe: 'DBType',
      type: 'string',
    })
    .option('C', {
      alias: 'Console',
      describe: 'Console',
      type: 'boolean',
    })
    .option('L', {
      alias: 'LogLevel',
      describe: 'LogLevel',
      type: 'string',
    })
    .option('C', {
      alias: 'Color',
      describe: 'Color',
      type: 'string',
    })
    .option('T', {
      alias: 'Table',
      describe: 'Table',
      type: 'boolean',
    })
    .option('S', {
      alias: 'Spacing',
      describe: 'Spacing',
      type: 'number',
    })
    .option('M', {
      alias: 'MessageSeperator',
      describe: 'MessageSeperator',
      type: 'string',
    })
    .option('L', {
      alias: 'Layout',
      describe: 'Layout',
      type: 'string',
    })
    .option('H', {
      alias: 'Help',
      describe: 'Help',
      type: 'boolean',
    })
    .help('H')
    .alias('H', 'help');
  // #endregion

  // #region params
  const loggerParams: ILoggerParams = {
    logLevel: LogLevel.Info,
    toFile: true,
    toDb: false,
    toConsole: true,
    typeOfDB: DBType.Text,
    consoleConfig: new ConsoleConfig({
      isEncrypted: false,
      color: COLORS.GREEN,
      table: true,
      spacing: 2,
      messageSeperator: MESSAGE_SEPERATOR.DASH,
      layout: LAYOUT.CENTER,
    }),
    fileWriter: Factory.CreateFileWriter(),
  };

  // #endregion

  // #region logger

  const logger = Factory.CreateLogger(loggerParams);
  
  // #endregion

  // #region log

  logger.log('Hello World');

  // #endregion
};

// eslint-disable-next-line no-console
main(args).catch(console.error);
