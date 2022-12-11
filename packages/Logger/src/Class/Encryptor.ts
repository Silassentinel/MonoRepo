// #region imports
import EncryptionAlgo from 'Enum/EncryptionAlgo';
import Crypto, { Hash, HashOptions } from 'crypto';
import EncryptionError from 'utilities/Errors/EncryptionError';
import uuid from 'uuid';
import IEncryptor from 'Interface/IEncryptor';
// #endregion
/**
 * This class will contain all functions and logic to encrypt and decrypt data.
 */
class Encryptor implements IEncryptor {
  // #region props

  /**
   * This property will hold the hash options.
   */
  private _hashOptions!: HashOptions;

  /**
   * This property will hold the encryption algorithm.
   */
  private _encryptionAlgo!: EncryptionAlgo;

  /**
   * This property will hold the saltiest salt that ever salted.
   */
  private _salt : string = uuid.v4();
  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/setters

  GetHashOptions = (): HashOptions => this._hashOptions;

  /**
   * This function returns the encryption algorithm.
   * @returns {string} encryption algorithm
   */
  GetEncryptionAlgo = (): EncryptionAlgo => this._encryptionAlgo;

  /**
   * This function returns the saltiest salt that ever salted.
   * @returns {string} salt
   */
  GetSalt = (): string => this._salt;

  // -----------------

  SetHashOptions = (hashOptions: HashOptions): void => {
    this._hashOptions = hashOptions;
  };

  /**
   * This function will set the encryption algorithm.
   * @param encryptionAlgo {EncryptionAlgo} Encryption algorithm to use.
   */
  SetEncryptionAlgo = (encryptionAlgo: EncryptionAlgo): void => {
    this._encryptionAlgo = encryptionAlgo;
  };

  /**
   * This function will set the saltiest salt that ever salted.
   * @param salt {string} Saltiest salt that ever salted.
   */
  SetSalt = (salt: string): void => {
    this._salt = salt;
  };

  // #endregion
  // #region public methods
  Encrypt = (data: string): string => {
    if (!data) {
      throw new EncryptionError(
        'Encryptor-Encrypt',
        'data is null or undefined',
        new Error().stack,
        'no data no ecnrypt',
      );
    }
    if (this._encryptionAlgo === EncryptionAlgo.None) {
      Crypto.scrypt(data, this._salt, data.length, (err) => {
        if (err) {
          throw new EncryptionError(
            'Encryptor-Encrypt',
            'error while encrypting',
            err?.stack,
            'error while encrypting',
          );
        }
      });
    }
    if (this._encryptionAlgo === EncryptionAlgo.AES_256) return data;
    if (this._encryptionAlgo === EncryptionAlgo.RSA_4096) return data;
    if (this._encryptionAlgo === EncryptionAlgo.ANUBIS) return data;
    if (this._encryptionAlgo === EncryptionAlgo.BLOWFISH) return data;
    if (this._encryptionAlgo === EncryptionAlgo.CAST) return data;
    if (this._encryptionAlgo === EncryptionAlgo.CAMELLIA) return data;
    if (this._encryptionAlgo === EncryptionAlgo.GOST) return data;
    if (this._encryptionAlgo === EncryptionAlgo.IDEA) return data;
    if (this._encryptionAlgo === EncryptionAlgo.KASUMI) return data;
    if (this._encryptionAlgo === EncryptionAlgo.MARS) return data;
    if (this._encryptionAlgo === EncryptionAlgo.MISTY1) return data;
    if (this._encryptionAlgo === EncryptionAlgo.NOEKEON) return data;
    if (this._encryptionAlgo === EncryptionAlgo.RIJNDAEL) return data;
    if (this._encryptionAlgo === EncryptionAlgo.SAFER) return data;
    if (this._encryptionAlgo === EncryptionAlgo.SEED) return data;
    if (this._encryptionAlgo === EncryptionAlgo.SERPENT) return data;
    if (this._encryptionAlgo === EncryptionAlgo.SKIPJACK) return data;
    if (this._encryptionAlgo === EncryptionAlgo.TEA) return data;
    if (this._encryptionAlgo === EncryptionAlgo.TWOFISH) return data;
    if (this._encryptionAlgo === EncryptionAlgo.XTEA) return data;
    if (data) return data;
    return '';
  };

  // #endregion
  // #region private helpers
  /**
   * This method will create a private key
   */
  private _createPrivateKey = async (): Promise <string > => {
    const iv = Crypto.randomBytes(4096);
    let key;
    Crypto.scrypt('password', 'salt', 4096, (err, derivedKey) => {
      if (err) throw new EncryptionError('Encryptror-CreatePK', err.message, err.stack, 'Could not create private key');
      key = derivedKey.toString('utf8');
    });
    const pk = Crypto.createPrivateKey('pkcs8');
    return key || '';
  };

  /**
   * This method will create a public key
   */
  private _createPublicKey = (): string => '';

  /**
   * This method will create a hash
   */
  private _createHash = (dataToHash: any): string => {
    const hashOptions: HashOptions = this.GetHashOptions();
    const hash = Crypto.createHash(this.GetEncryptionAlgo(), hashOptions);
    hash.update(dataToHash);
    return hash.digest('hex');
  };

  /**
   * This method will compare hashes
   * To be used before and after encryption
   */
  private _compareHashes = (hashOne: Hash, hashTwo: Hash): boolean => hashOne === hashTwo;

  /**
   * This method will create a salt
   */
  private _createSalt = (): string => {
    const tempSalt = this.GetSalt();
    return tempSalt;
  };

  // #endregion
  // #endregion
}

export default Encryptor;
