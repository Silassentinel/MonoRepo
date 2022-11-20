/* eslint-disable no-unused-vars */
// #region imports
import EncryptionAlgo from 'Enum/EncryptionAlgo';
import { HashOptions } from 'crypto';
// #endregion
/**
 * This class will contain all functions and logic to encrypt and decrypt data.
 */
interface IEncryptor {
  // #region props
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/setters

  GetHashOptions : () => HashOptions;

  /**
   * This function returns the encryption algorithm.
   * @returns {string} encryption algorithm
   */
  GetEncryptionAlgo : () => EncryptionAlgo;

  /**
   * This function returns the saltiest salt that ever salted.
   * @returns {string} salt
   */
  GetSalt : () => string;

  // -----------------

  SetHashOptions : (hashOptions: HashOptions) => void;

  /**
   * This function will set the encryption algorithm.
   * @param encryptionAlgo {EncryptionAlgo} Encryption algorithm to use.
   */
  SetEncryptionAlgo : (encryptionAlgo: EncryptionAlgo)=> void;

  /**
   * This function will set the saltiest salt that ever salted.
   * @param salt {string} Saltiest salt that ever salted.
   */
  SetSalt : (salt: string)=> void;

  // #endregion
  // #region public methods
    /**
     * This function will encrpt the data
     * @param dataToEncrypt {string} Data to encrypt
     */
  Encrypt : (data: string)=> string;

  // #endregion
  // #region private helpers
  // #endregion
  // #endregion
}

export default IEncryptor;
