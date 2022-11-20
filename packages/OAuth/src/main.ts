// This is the main entry point of the application

import Server from './server/Server';

const main = async () => {
  await Server.Run();
};

// eslint-disable-next-line no-console
main().catch(console.error);
