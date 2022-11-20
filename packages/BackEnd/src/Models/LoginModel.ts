// Model sits on top of the entity and defines the shape of the data that is sent to the server from the db
// #region imports
import { Hash } from 'crypto';
import LoginResponse from '../types/LoginResponse';
// import pool from '../DBConfig/Config';
// #endregion

/**
* This function will query the DB to verify if the provided data is correct
* @param username The username of the user
* @param password The password of the user
*/
// const VerifyUser = (username: string, password: string | Hash)
//   : Promise<LoginResponse | undefined> => new Promise((resolve, reject) => {
//   if (password.toString().length <= 8) reject(new Error('Password is empty'));
//   if (username.toString().length <= 0) reject(new Error('Username is empty'));
//   const JObject = {
//     Login: 'true',
//     LoginDetails: { UserName: '[UsernamePlaceHolder]', Password: '[PasswordPlaceHolder]' },
//   };
//   JObject.LoginDetails.UserName.replace('[UsernamePlaceHolder]', username);
//   JObject.LoginDetails.Password.replace('[PasswordPlaceHolder]', password.toString());
//   resolve(JObject);
// });

// TODO : EDIT MODEL TO WORK WITH A DB and update file
/**
 * This class has the login model and will communicate with the DB fake for now
 */
class LoginModel {
  /**
* This function will query the DB to verify if the provided data is correct
* @param username The username of the user
* @param password The password of the user
*/
  static VerifyUser = (username: string, password: string | Hash)
  : Promise<LoginResponse | undefined> => new Promise((resolve, reject) => {
    if (password.toString().length <= 8) reject(new Error('Password is empty'));
    if (username.toString().length <= 0) reject(new Error('Username is empty'));
    const JObject = {
      Login: 'true',
      LoginDetails: { UserName: '[UsernamePlaceHolder]', Password: '[PasswordPlaceHolder]' },
    };
    JObject.LoginDetails.UserName.replace('[UsernamePlaceHolder]', username);
    JObject.LoginDetails.Password.replace('[PasswordPlaceHolder]', password.toString());
    resolve(JObject);
  });
    // pool.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`, (err, result) => {
  //   if (err) throw err;
  //   return result;
  // });
}

export default LoginModel;
