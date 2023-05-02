// #region imports
import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
// #endregion

class FileCollector {
  files: Map<string, string[]> = new Map<string, string[]>();

  /**
   * This function will read files from a folder and return their paths as a string array.
   */
  CollectFiles = async (folderPath = './html/') => {
    
   }:

  /**
     * Collect all templates from the TemplateRootPath /html
     * @param folderPath TemplateRootPath
     */
  CollectTemplates = async (folderPath = './html/') => {
    // const templateDictionary: TemplateDictionary = {};

    const subDirectories = await ToolBox.GetSubDirectoriesAndContents(folderPath, {
      encoding: 'utf8',
      withFileTypes: true,
    });
    // eslint-disable-next-line no-restricted-syntax
    for (const subDirectory of subDirectories) {
      // get all files in folder:
      if (subDirectory.isDirectory()) {
        // console.log(`subDir: ${subDirectory.name}`);
        const pageList: string[] = [];
        this.files.set(subDirectory.name, pageList);
        // eslint-disable-next-line no-await-in-loop
        const directoryContents = await ToolBox.GetSubDirectoriesAndContents(`${folderPath}${subDirectory.name}/`, {
          encoding: 'utf8',
          withFileTypes: true,
        });
        // loop over all files in folder & add them to dictionary:
        // directory as key , filepath as value
        // eslint-disable-next-line no-restricted-syntax
        for (const file of directoryContents) {
          if (file.isFile()) {
            // console.log(`file: ${file.name}`);
            // console.log(`subDirectory: ${subDirectory.name}`);
            if (this.files.has(subDirectory.name)) {
              this.files.get(subDirectory.name)?.push(`${folderPath + subDirectory.name}/${file.name}`);
            }
          }
        }
        // this._templates = templateDictionary;
      }
    }
    // return this._templates;
  };
}

export default FileCollector;
