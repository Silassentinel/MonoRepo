// region functions
import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
// #endregion
// #region constants
const year = ToolBox.GetCurrentYear();
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
