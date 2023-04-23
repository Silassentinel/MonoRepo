// #region imports
import TemplateDictionary from '../Models/TemplateDictionary';
// #endregion
// #region config
// #endregion

class TemplateBuilder {
  // #region ctor
  // #endregion
  // #region methods
  /**
     *
     * @param filePath TemplateRootPath
     */
  CollectTemplates = async (filePath: string) => {
    this._templates = {};
  };

  // #endregion
  // #region properties
  /**
     * MakeShift dictionary to hold filename & contents
     */
  _templates!: TemplateDictionary;
  // #endregion
}

export default TemplateBuilder;
