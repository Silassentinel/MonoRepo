/* eslint-disable no-unused-vars */
// #region imports
import { Hash } from 'crypto';
// #endregion
/**
 * This interface will be the model for the login object
 */
interface ILogin
{
    SetUserName(username : string): void;
    GetUserName(): string;
    SetPassword(password: string): void;
    GetPassword(): string;
    SetHashedPassword(hashedPassword: string): void;
    GetHashedPassword(): string|Hash;
}

export default ILogin;
