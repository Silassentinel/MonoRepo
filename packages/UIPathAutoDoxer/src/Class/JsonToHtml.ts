// #region imports
import * as fs from 'fs';
// import * as dotenv from 'dotenv';
import { promisify } from 'util';
// #endregion
// #region config
// #endregion

class JsonToHtml {
  // #region ctor
  constructor(htmlTemplatePath: string, json:string) {
    this.htmlTemplatePath = htmlTemplatePath;
    this.json = json;
  }

  // # endregion
  // # region methods
  /**
   * Promisified readFile
   */
  private _readFile = promisify(fs.readFile);

  WriteFile = promisify(fs.writeFile);

  WriteHtmlFile = async () => {
    this.htmlTemplate = await this._readFile(this.htmlTemplatePath, { encoding: 'utf8' });
  };

  // # endregion
  // # region properties
  htmlTemplate!: string;

  htmlTemplatePath: string;

  json!: string;
  // # endregion
}

export default JsonToHtml;
