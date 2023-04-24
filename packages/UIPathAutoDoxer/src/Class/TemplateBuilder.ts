// #region imports
// #endregion
// #region config
// #endregion

import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';

class TemplateBuilder {
  // #region ctor
  // #endregion
  // #region methods

  // private _readFile = promisify(readFile);

  // # TODO
  BuildList = async () => {
     ToolBox.GetSubDirectoriesAndContents('./html/', {
      encoding: 'utf8',
      withFileTypes: true,
    }).
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
