// #region imports
import ICompressor from 'Interface/ICompressor';
import CompressorMode from 'Enum/CompressorEnum';
import Zlib from 'zlib';
// #endregion
/**
 * This class will contain all the logic and functions to compress data.
 */
class Compressor implements ICompressor {
  // #region props
  /**
   * This property will hold the compression level.
   */
  private _compressionLevel!: CompressorMode;

  /**
   * The zipper
   */
  zipper = Zlib;

  // #endregion
  // #region ctor
  // #endregion
  // #region methods
  // #region getters/setters
  // #endregion
  // #region public methods
  /** *
   * This function will compress the dataStream by using the zlib module.
   * @param dataToCompress {any} Data to compress
   */
  CompressStream = (dataToCompress: any): any => {
    const gzip = this.zipper.createGzip();
    const compressedData = dataToCompress.pipe(gzip);
    return compressedData;
  };

  /**
   * This function will compress the data.
   * @param dataToCompress {any} Data to compress
   */
  CompressFile = (dataToCompress: any): any => {
    const compressedData = this.zipper.gzipSync(dataToCompress);
    return compressedData;
  };
  // #endregion
  // #region private helpers
  // #endregion
}

export default Compressor;
