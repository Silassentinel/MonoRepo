import { resolve } from 'path';

// temp file
class Helper {
  // will check if git is installed
  static getGitPath = async () => {
    // run on cli git --version
    // check cli output for something similar to git version
    console.log('executing: git --version');
    const { stdout, stderr } = await (await import('child_process')).exec('git --version');
    stdout?.pipe(process.stdout);
    console.log('stderr: ', stderr);

    // if git is installed return path to git
    return 'git';
  };

  // check current os return name as string
  static getOS = async (): Promise<string> => {
    const os = await import('os');
    const osFlavor = os.type().toLowerCase();
    if (osFlavor === 'Linux') return resolve('linux');
    if (osFlavor === 'Darwin') return resolve('mac');
    if (osFlavor === 'Windows_NT') return resolve('windows');
    return resolve(osFlavor);
  };
}

export default Helper;
