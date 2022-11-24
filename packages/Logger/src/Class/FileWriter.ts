// #region imports
import fs from 'fs';
import IEncryptor from 'Interface/IEncryptor';
import IFileConfig from 'Interface/IFileConfig';
import IFileWriter from 'Interface/IFileWriter';
// #endregion
/**
 * This class will write to a file based on the FileConfiguration.
 */
class FileWriter implements IFileWriter {
  // #region props
  /**
   * To encrypt the data.
   */
  encryptor!: IEncryptor;

  /**
   * This property will hold the file configuration.
   */
  private _fileConfig!: IFileConfig;

  // #endregion
  // #region ctor
  /**
   * This constructor will initialize the FileWriter.
   * @param fileConfig {IFileConfig} The file configuration.
   */
  constructor(fileConfig: IFileConfig) {
    this._fileConfig = fileConfig;
  }

  // #endregion
  // #region methods
  // #region getters/setters
  /**
     * This function returns the FileConfig object.
     * @returns {FileConfig} fileConfig
     */
  GetFileConfig = () : IFileConfig => this._fileConfig;
  // ------------------------------

  /**
     * This function sets the fileconfig object.
     * @param fileConfig {FileConfig}
     */
  SetFileConfig = (fileConfig: IFileConfig): void => {
    this._fileConfig = fileConfig;
  };

  // #endregion
  // #region public methods
  /**
   * This function will write the data to a file using the file config variable.
   * applying all the formatting and settings within the file config.
   * @param data data to be written to the file.
   * @async
   */
  Write = (data: string): void => {
    const filePath : string = this.GetFileConfig().GetFileLocation();
    const fileName : string = this.GetFileConfig().GetFileName();
    const fileExtension : string = this.GetFileConfig().GetFileExtension();
    const path = `${filePath + fileName + fileExtension}`;
    // if fileConfig-isEncrypted is true then encrypt the data.
    if (this.GetFileConfig().GetIsEncrypted()) {
      /* const encryptedData = */ this.encryptor.Encrypt(data);
    }
    // if fileConfig-isCompressed is true then compress the data.
    
    // if fileConfig-isEncrypted is true and fileConfig-isCompressed is true then encrypt and compress the data.
    // if fileConfig-isEncrypted is false and fileConfig-isCompressed is false then write the data as it is.
    fs.writeFile(path, data, (err) => {
      console.error(err);
    });
  };
  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default FileWriter;
