// This is the main entry point of the application

// # region imports
// import * as yargs from 'yargs';
import XmlParser from './Class/XMlParser';
import TemplateBuilder from './Class/TemplateBuilder';
// # endregion
// # region config
// # endregion
// # region GlobalFunctions
const { log } = console;
// # endregion

// main takes in arguments from the command line and runs the application
const main = async (/* args?: yargs.Arguments */) => {
  const filePath = './temp/getLatestExcel.xaml';
  const xmlParser = new XmlParser(filePath);
  const xmlAsObject = await xmlParser.parse();
  log(xmlAsObject);
  const templateBuilder = new TemplateBuilder();
  templateBuilder.BuildList();
  log(templateBuilder._templates);
  log('fin.');
};

// eslint-disable-next-line no-console
main().catch(console.error);
