// #region imports
import { ExecException, exec } from 'child_process';
// #endregion

class Helper {
  /**
   * This function will check if git is installed on the system, if it's installed it will return the version of git.
   * @return {Promise<boolean>} A promise that resolve to true if git is installed, or false if not
   */
  static isGitInstalled = async () => {
    const git = await Helper.execute('git --version');
    if (!git) {
      return false;
    }
    return true;
  };

  // check current os return name as string
  static getOS = async (): Promise<string> => {
    const os = await import('os');
    const osFlavor = os.type().toLowerCase();
    if (osFlavor === 'linux') return 'linux';
    if (osFlavor === 'darwin') return 'mac';
    if (osFlavor === 'windows_NT') return 'windows';
    return osFlavor;
  };

  /**
 * @param {string} command A shell command to execute
 * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
 * @example const output = await execute("ls -alh");
 */
  static execute = (command: string) =>
    /**
     * @param {Function} resolve A function to call when the shell command is executed successfully
     * @param {Function} reject A function to call when the shell command is executed with an error
     * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
     */
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve, reject) => {
    /**
     * @param {Error} error An error triggered during the execution of the childProcess.exec command
     * @param {string|Buffer} standardOutput The result of the shell command execution
     * @param {string|Buffer} standardError The error resulting of the shell command execution
     * @see https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
     */
      exec(command, (error : ExecException | null, standardOutput : string, standardError: string) => {
        if (error) {
          reject();
          return;
        }
        if (standardError) {
          reject(standardError);
          return;
        }
        resolve(standardOutput);
      });
    });
}

export default Helper;
