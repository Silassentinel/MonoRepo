// this is the entry point of the BackEnd server.

// #region imports
import Run from './server/Server';
// #endregion

const Main = async () => {
  await Run();
};

// eslint-disable-next-line no-console
Main().catch(console.error);
