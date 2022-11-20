// #region imports
import express from 'express';
// #endregion
// #region router
const router = express.Router();
// #endregion

// #region GET
router.get('*', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.headers.toString()); // TODO: check the implications of this
  res.status(404).redirect('/home');
});
// #endregion
// #region POST
router.post('*', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.headers.toString()); // TODO: check the implications of this
  res.status(404).redirect('/home');
});
// #endregion

// #region PUT
// #endregion
// #region DELETE
// #endregion

export default router;
