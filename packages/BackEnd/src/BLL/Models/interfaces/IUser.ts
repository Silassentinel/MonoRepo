/* eslint-disable no-unused-vars */
/**
 * Interface of the User class
 */
interface IUser
{
    GetPassword: () => string;
    SetPassword: (password: string) => void;
    UpdatePassword: (password: string) => void;
    GetUsername: () => string;
    SetUserName: (username: string) => void;
// eslint-disable-next-line @typescript-eslint/no-extra-semi, no-extra-semi
};

export default IUser;
