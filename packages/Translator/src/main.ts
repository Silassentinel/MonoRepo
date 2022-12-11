// This is the main entry point of the application

const main = async () => {
  const emptyObj = { testProp: '' };
  emptyObj.testProp = 'test';
};

// eslint-disable-next-line no-console
main().catch(console.error);
