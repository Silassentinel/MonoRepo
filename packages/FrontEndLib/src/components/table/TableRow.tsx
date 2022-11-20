// #region imports
import TableCell from './TableCell';
// #endregion
// #region Constants
// #endregion

/**
 *
 * @returns {JSX.Element}
 */
function TableRow(props: { key: string; kvp: Record<string, string> }): JSX.Element {
  const { key, kvp } = props;
  return (
    <>
      {/* comment */ }
      <TableCell contentName={kvp.toString()} key={key} />
      <div>{ key}</div>
      <div>TableRow</div>
      <div>TableRow</div>
      <div>TableRow</div>
      { /* another comment */ }
    </>
  );
}

export default TableRow;
