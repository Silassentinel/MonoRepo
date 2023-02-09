// #region imports
import express from 'express';
// import bodyparser from 'body-parser';
// import { check } from 'express-validator';
// #endregion
// #region config
// #endregion
// #region preconfig
const router = express.Router();
const jsonParser = bodyparser.json();
// #endregion

// #region GET
router.get('Register',[]); // should return register page (REACT component holding the register page)
// #endregion
// #region POST
router.route('').post(); // should handle the register request
// #endregion
// #region PUT
router.route('').put(); // If sent in a timely manner (within X ms) then update the previous request
// be sure to check if the request originated from the same IP
// #endregion
// #region DELETE
router.route('').delete(); // obsolete
// #endregion

export default router;
