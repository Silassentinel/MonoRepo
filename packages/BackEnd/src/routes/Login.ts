// #region imports
import express from 'express';
import bodyparser from 'body-parser';
import { header } from 'express-validator';
import LoginController from '../controllers/LoginController';
import CustomSanitizers from '../middleware/CustomSaniters';
// #endregion
// #region preconfig
const router = express.Router();
const jsonParser = bodyparser.json();
// #endregion

// #region GET
router.get('/Login', LoginController.Check);
// #endregion
// #region POST
router.post('/Login', [jsonParser,
  // check if username hase uppercase characters
  header('username').customSanitizer((value: string) => CustomSanitizers.ContainsUpperCase(value)),
  header('username').isAlphanumeric().withMessage('Username must be alphanumeric'),
  header('username').isLength({ min: 1 }).withMessage('Username must be at least 1 character long'),
  // .isLength({ min: 6 }).withMessage('Username is required'),
  header('password').isLength({ min: 25 }).withMessage('Password is required'),
  header('password').isAlphanumeric().withMessage('Password must be alphanumeric'),
], LoginController.Check);
// #endregion
// #region PUT
// router.route('').put();
// #endregion
// #region DELETE
// router.route('').delete();
// #endregion

export default router;
