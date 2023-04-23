// #region imports
import promisify from 'util.promisify';
import { /* readFile, */ readdir } from 'fs';
// #endregion
// #region config
// #endregion

class TemplateBuilder {
  // #region ctor
  // #endregion
  // #region methods

  private _getSubDirectories = promisify(readdir);

  // private _readFile = promisify(readFile);

  /**
     * Collect all templates from the TemplateRootPath /html
     * @param filePath TemplateRootPath
     */
  CollectTemplates = async (filePath = './html/') => {
    // const templateDictionary: TemplateDictionary = {};

    const subDirectories = await this._getSubDirectories(filePath, {
      encoding: 'utf8',
      withFileTypes: true,
    });
    subDirectories.forEach(async (subDirectory) => {
      // get all files in folder:
      if (subDirectory.isDirectory()) {
        console.log(`subDir: ${subDirectory}`);
        const directoryContents = await this._getSubDirectories(`${filePath}${subDirectory.name}/`, {
          encoding: 'utf8',
          withFileTypes: true,
        });
        // loop over all files in folder & add them to dictionary:
        // directory as key , filepath as value
        directoryContents.forEach(async (file) => {
          if (file.isFile()) {
            console.log(`file: ${file.name}`);
            console.log(`subDirectory: ${subDirectory.name}`);
            this._templates.set(subDirectory.name, file.name);
          }
        });
        // this._templates = templateDictionary;
      }
    });
    console.log('collected');
  };

  // # TODO
  BuildList = () => { };

  // # TODO
  Build = () => { };

  // # TODO
  BuildActivity = () => { };

  // # TODO
  BuildArgument = () => { };

  // # TODO
  BuildImport = () => { };

  // #endregion
  // #region properties
  /**
     * MakeShift dictionary to hold filename & contents
     */
  _templates = new Map< string, string >();
  // #endregion
}

export default TemplateBuilder;
