/* eslint-disable */
/**
 * This enum will contain the working modes of the compressor.
 */

enum CompressorMode
{
    /** Fast : littele to no compression*/
    Fast = 0,
    /** normal : compress with half*/
    Normal = 1,
    /**slow : compress to the max minimize where possible*/
    Slow = 2,
}

export default CompressorMode;

