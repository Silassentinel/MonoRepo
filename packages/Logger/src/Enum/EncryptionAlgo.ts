/* eslint-disable */
/**
 * This enum will hold all the possible encryption algorithms.
 */
enum EncryptionAlgo
{
    /** No Encryption */
    None = 'none',
    /** AES - 256*/
    AES_256 = 'aes-256-cbc',
    /** RSA - 4096*/
    RSA_4096 = 'RSA-4096',
    /** DES*/
    DES = 'DES-EDE3-CBC',
    /** Blowfish*/
    BLOWFISH = 'BF-CBC',
    /** Twofish*/
    TWOFISH = 'TWOFISH-CBC',
    /** IDEA*/
    IDEA = 'IDEA-CBC',
    /** CAST*/
    CAST = 'CAST-CBC',
    /** MARS*/
    MARS = 'MARS-CBC',
    /** SAFER*/
    SAFER = 'SAFER-SK64-CBC',
    /** Skipjack*/
    SKIPJACK = 'SKIPJACK-CBC64',
    /** Anubis*/
    ANUBIS = 'ANUBIS-CBC',
    /** Camellia*/
    CAMELLIA = 'CAMELLIA-256-CBC',
    /** SEED*/
    SEED = 'SEED-CBC',
    /** GOST*/
    GOST = 'GOST89-CBC',
    /** KASUMI*/
    KASUMI = 'KASUMI-CBC',
    /** MISTY1*/
    MISTY1 = 'MISTY1-CBC',
    /** Noekeon*/
    NOEKEON = 'NOEKEON-CBC',
    /** TEA*/
    TEA = 'TEA-CBC',
    /** XTEA*/
    XTEA = 'XTEA-CBC',
    /** Serpent*/
    SERPENT = 'SERPENT-CBC',
    /** Rijndael*/
    RIJNDAEL = 'RIJNDAEL-256-CBC',
 }

export default EncryptionAlgo;
