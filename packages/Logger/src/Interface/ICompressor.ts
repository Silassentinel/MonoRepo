/* eslint-disable no-unused-vars */
// #region imports
// #endregion
/**
 * This class will contain all the logic and functions to compress data.
 */
 interface ICompressor {
    // #region props
    // #endregion
    // #region ctor
    // #endregion
    // #region methods
    // #region getters/setters
    // #endregion
    // #region public methods
     /**
      * This function will compress the dataStream.
      */
    CompressStream : (dataToCompress: any)=> any;
     /**
      * This function will compress the data.
      * @param dataToCompress {any} Data to compress
      */
     CompressFile : (dataToCompress:any) => any;
    // #endregion
    // #region private helpers
    // #endregion
  }

export default ICompressor;
