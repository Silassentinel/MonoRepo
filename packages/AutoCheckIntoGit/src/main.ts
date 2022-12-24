/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// #region imports
import dotenv from 'dotenv';
// #endregion

// #region config
dotenv.config();
// #endregion

// This is the main entry point of the application

const main = async () => {
  console.log('Starting AutoCheckIntoGit...');
  // absolute path to the root directory of the project from env
  const rootDir = process.env.PWD;
  console.log(`Root directory: ${rootDir}`);
  // Check via helper which os is running
  const helper = await import('./Class/Helper').then((m) => m.default);
  const os = await helper.getOS();

  console.log('*********************************');
  console.log(`OS: ${os}`);
  console.log('*********************************');

  helper.getGitPath();
  const exec = await import('child_process').then((m) => m.exec);

  if (os === 'windows') {
    try {
      const { stdout, stderr } = await exec('powershell.exe -version');
      if (stderr) {
        // eslint-disable-next-line no-console
        console.error(stderr);
        throw new Error('Powershell not found');
      }
      console.log(stdout);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  // if os is windows run script/win.ps1 or script/win.bat if no powershell is present

  // const os = helper.getOS();
  // if os is linux run script/linux.sh
  // if os is mac run script/mac.sh
};

// eslint-disable-next-line no-console
main().catch(console.error);
