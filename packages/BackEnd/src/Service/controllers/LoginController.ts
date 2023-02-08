// #region imports
import bcrypt from 'bcrypt';
import { ValidationError, validationResult } from 'express-validator';
import { Request, Response } from 'express';
import User from '../../BLL/Models/classes/User';
import LoginModel from '../../DAL/Repos/Models/LoginModel';
import LoginResponse from '../../BLL/Models/types/LoginResponse';
// #endregion.
/**
 * This class will contain all the logic to control the login
 */
class LoginController {
  /**
   * This function will check the incomming request and verify if the user is valid
   * by calling the VerifyUser function
   * @param request The incomming request object
   * @param response The outgoing response object
   * @returns An object of type LoginResponse
   */
  static Check = (request: Request, response: Response) => {
    const errorFormatter = ({
      location, msg, param, value, nestedErrors,
    }: ValidationError) => `${location}[${param}]: ${msg} \n ${nestedErrors} \n ${value}`;
    const errors = validationResult(request).formatWith(errorFormatter);
    const { password, username } = request.headers;
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array(), failed: 'true' });
    }
    const user = User.GetInstance();
    user.SetUserName(username as string);
    user.SetPassword(password as string);
    return bcrypt.hash(user.GetPassword().toString(), 10, async (err: Error | undefined, hash: string) => {
      if (err) throw err;
      user.UpdatePassword(hash);
      LoginModel.VerifyUser(user.GetUsername(), user.GetPassword())
        .then((result: LoginResponse|undefined) => {
          const resultUsername : string = result?.LoginDetails.UserName as string;
          const resultPassword : string = result?.LoginDetails.Password as string;
          response.json({ username: resultUsername, password: resultPassword });
        }).catch((error : Error) => {
          // eslint-disable-next-line no-console
          console.log(`error: ${error}`);
          response.send(error.message);
        });
    });
  };
}

export default LoginController;
