// #region imports
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { promisify } from 'util';
import xml2js from 'xml2js';
// #endregion
// #region config
dotenv.config();
// #endregion

/**
 *  This class will parse the xaml file to a json object.
 */
class XmlParser {
  // #region ctor
  /**
     * Ctor
     * @param filePath The path to the xaml file.
     */
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  // #endregion
  // #region methods
  /**
   * Promisified readFile
  */
  private _readFile = promisify(fs.readFile);

  /**
   * Parse an xml string to a Jobject
   * @returns The parsed xaml file as a json object.
   */
  parse = async () => {
    // get file contents
    const parser = new xml2js.Parser();
    this._fileContent = await this._readFile(this.filePath, { encoding: 'utf8' });
    const result = await parser.parseStringPromise(this._fileContent);
    return result;
  };

  // #endregion
  // #region properties
  /**     * The path to the xaml file.
     */
  filePath!: string;

  /**
     * The content of the xaml file.
     */
  private _fileContent!: string; // = this._readFile(this.filePath, { encoding: 'utf8' });
  // #endregion
}

export default XmlParser;
