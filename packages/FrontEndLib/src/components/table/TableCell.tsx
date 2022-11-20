// #region imports
// #endregion
// #region Constants
// #endregion
/**
 * This component will receive a string and will render a table cell.
 * @returns {JSX.Element}
 */
function TableCell(props : { contentName: string }): JSX.Element {
  const { contentName } = props;
  return (
    <td>
      <div>{contentName}</div>
      <div>{contentName}</div>
    </td>
  );
}

export default TableCell;
