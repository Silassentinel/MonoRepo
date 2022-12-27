// #region imports
import { ExecException, exec } from 'child_process';
// #endregion

class Helper {
  /**
   * This function will check if git is installed on the system, if it's installed it will return the version of git.
   * @return {Promise<boolean>} A promise that resolve to true if git is installed, or false if not
   */
  static IsGitInstalled = async () => {
    const git = await Helper.Execute('git --version');
    if (!git) {
      return false;
    }
    return true;
  };

  /**
   * This function will check which os is running.
   * @returns {Promise<string>} A promise that resolve to the os type
   */
  static GetOS = async (): Promise<string> => {
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
  static Execute = (command: string) =>
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

  /**
   * This function will run every 5 minutes. It takes a function as parameter and will execute it every 5 minutes.
   * @param {Function} func The function to execute every 5 minutes.
   */
  static runEveryFiveMinutes = (func: (p1?: string, p2?: string) => any) => {
      setInterval(() => func, 300000);
  };
}

export default Helper;
