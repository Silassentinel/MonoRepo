// #region imports
// import ToolBoxError from 'utilities/Errors/ToolBoxError';
import { Hash } from 'crypto';
import ToolBoxError from 'utilities/Errors/ToolBoxError';
import UUIDV4, { V4Options } from 'uuid';
// #endregion

class ToolBox {
  /**
     * This function will be used to check if the given string is empty.
     * @param str string to check
     * @returns {boolean} true if string is empty
     */
  static IsStringEmpty = (str: string): boolean => str.length === 0;

  /**
     * This will check if the given object is undefined or null.
     * @param obj object to check
     * @returns {boolean} true if object is undefined or null
     */
  static IsNullOrUndefined = (obj: unknown): boolean => obj === undefined || obj === null;

  static GenerateApiKey = (user: string, password: string|Hash, email: string): string => {
    if (!user) throw new ToolBoxError('User is required');
    if (!password) throw new ToolBoxError('Password is required');
    if (!email) throw new ToolBoxError('Email is required');
    return UUIDV4.v4({
      node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
      clockseq: 0x1234,
      msecs: new Date('2011-11-01').getTime(),
    } as V4Options);
  };
}

export default ToolBox;
