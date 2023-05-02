// #region imports
// #endregion
// #region config
// #endregion

import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
/**
 * The template builder will receive the html templates from the FileCollector
 * then, it will build the templates by adding the content to the template, from the xmlParser.
 * last the the html files will be written to disk.
 */
class TemplateBuilder {
  // #region ctor
  // #endregion
  // #region methods

  /**
   * This function will build the templates list/map by collectings all subfolders & content
   * then it will add the content to the map.
   * @param folder {string} The folder to build the templates from.
   */
  BuildList = async (folder = './html/') => {
    const subFoldersAndContent = await ToolBox.GetSubDirectoriesAndContents(folder, {
      encoding: 'utf8',
      withFileTypes: true,
    });
    subFoldersAndContent.forEach((val, index) => {
      if (val.isDirectory()) {
        console.log(`subDir: ${val.name}`);
        console.log('index: ', index);
      }
    });
  };

  /*

  // # TODO
  Build = () => { };

  // # TODO
  BuildActivity = () => { };

  // # TODO
  BuildArgument = () => { };

  // # TODO
  BuildImport = () => { };
  */
  // #endregion
  // #region properties
  /**
     * MakeShift dictionary to hold filename & contents
     */
  _templates = new Map< string, string[] >();
  // #endregion
}

export default TemplateBuilder;
