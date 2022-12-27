/* eslint-disable max-len */
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

  console.log('*********************************');
  console.log(`OS: ${await helper.GetOS()}`);
  console.log('*********************************');

  if (await helper.IsGitInstalled()) {
    // if os is windows run script/win.ps1 or script/win.bat if no powershell is present
    if (await helper.GetOS() === 'windows') {
      try {
        const result = await helper.Execute('powershell.exe -version');
        console.error(result);
      } catch (error) {
        console.error(error);
      }
    }

    // if os is linux run script/linux.sh
    if (await helper.GetOS() === 'linux') {
      try {
        // const curDirr = await helper.execute('pwd');
        // console.log(`current directory is: ${curDirr}`);
        const projectRoot = process.env.ROOTDIR;
        const result = await helper.Execute(`cd ${projectRoot} && git status`) as string;
        if (result.includes('modified')) {
          await helper.Execute(`cd ${projectRoot} && git add . && git commit -m "auto commit ${Date.now().toLocaleString('nl-Be')}" && git push`);
        }
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    // if os is mac run script/mac.sh
    if (await helper.GetOS() === 'mac') {
      try {
        const result = await helper.Execute('bash -version');
        console.error(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  }
};

// eslint-disable-next-line no-console
main().catch(console.error);
