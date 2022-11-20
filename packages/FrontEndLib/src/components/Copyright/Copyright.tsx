// region functions
import GetCurrentYear from '../../scripts/GetCurrentYear';
// #endregion
// #region constants
const year = GetCurrentYear();
// #endregion
/**
 *
 * @returns
 */
function Copyright() {
  return (
    <>
      Copyright ©
      {' '}
      { (year) }
      {' '}
      brand
    </>
  );
}

export default Copyright;
