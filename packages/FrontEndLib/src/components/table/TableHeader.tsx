// #region imports
// #endregion
// #region Constants
// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function TableHeader(props: { data: unknown, CustomKey: number; }) {
  const { data, CustomKey } = props;
  return (
    <>
      <div>{ JSON.stringify(data) }</div>
      <div>{ CustomKey }</div>
    </>
  );
}

export default TableHeader;
