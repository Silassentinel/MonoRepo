// the validator class will be used to validate the request body
// and the request params

// #region imports
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import RequestValidationError from '../../Utilities/Errors/RequestValidationError';
// #endregion

class Validator {
  // #region Validate (public)
  /**
   * the validate method will be used to validate the request body
   * and the request params
   * @param req the request object
   * @param res the response object
   * @param next the next middleware
   */
  static validate = (req: Request, res: Response, next: NextFunction) => {
    // get the errors from the validationResult
    const errors = validationResult(req);

    // if there is an error then throw the RequestValidationError
    if (!errors.isEmpty()) {
      res
        .status(400)
        .send({ body: 'An error occured' });
      throw new RequestValidationError({
        message: 'errors.array()',
        field: undefined,
      } as Array); // TODO check ho to convert the array to string
    }

    // if there is no error then call the next middleware
    return next();
  };
    // #endregion

  // #region private methods
  private static _validateBody = (req: Request, res: Response, next: NextFunction) => {
    // get the errors from the validationResult
    const errors = validationResult(req);

    // if there is an error then throw the RequestValidationError
    if (!errors.isEmpty()) {
      throw new RequestValidationError({ message: errors.array().join('-'), field: 'body' });
    }

    // if there is no error then call the next middleware
    return next();
  };
  // #endregion
}

export default new Validator();
