// #region imports
import * as fs from 'fs';
// import * as dotenv from 'dotenv';
import { promisify } from 'util';
// #endregion
// #region config
// #endregion

/**
 * This is a helper class for the TemplateBuilder, it will convert the json object to html.
 * This will read in the html contents & replace the placeholders
 * in the html files with the corresponding JobObject values.
 */
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

  /**
   * Promisified writeFile
   */
  WriteFile = promisify(fs.writeFile);

  /**
   * Write the html file to disk.
   */
  WriteHtmlFile = async () => {
    this.htmlTemplate = await this._readFile(this.htmlTemplatePath, { encoding: 'utf8' });
  };

  /**
   * This funcition will receive the html files from the FileCollector and read into memory their contents
   */
  ReadHTMLFiles = async () => {

  // # endregion
  // # region properties
  htmlTemplate!: string;

  htmlTemplatePath: string;

  json!: string;
  // # endregion
}

export default JsonToHtml;
