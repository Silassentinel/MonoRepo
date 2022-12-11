// This is the main entry point of the application

const main = async () => {
  // determine os version / flavor
  const os = await import('os');
  const osVersion = os.release();
  const osFlavor = os.type();

  // if os is windows run script/win.ps1 or script/win.bat if no powershell is present

  // if os is windows
  if (osFlavor === 'Windows_NT') {
    // if powershell is present
    if (osVersion.includes('Microsoft')) {
      // run script/win.ps1

    } else {
      // run script/win.bat
    }
  }

  // if os is linux
  if (osFlavor === 'Linux') {
    // run script/linux.sh
    console.log('pinguin');
  }

  // if os is mac
  if (osFlavor === 'Darwin') {
    // run script/mac.sh
    console.log('mac');
  }
};

// eslint-disable-next-line no-console
main().catch(console.error);
