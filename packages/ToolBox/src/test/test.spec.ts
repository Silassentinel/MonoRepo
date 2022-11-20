// this is a test file to setup the test query in package json
// #region imports
import { expect } from 'chai';
import supertest from 'supertest';
import dotenv from 'dotenv';
// #endregion

// #region config
dotenv.config();
// #endregion

// #region constants
const { PORT } = process.env;
const request = supertest(`http://localhost:${PORT}`);
// #endregion

// #region test
describe('test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });

  it('should fail', () => {
    expect(false).to.be.false;
  });

  it('should return 200', async () => {
    const response = await request.get('/');
    expect(response.status).to.equal(200);
  });
});

// #endregion
