// #region imports
import TableBody from './TableBody';
import TableHeader from './TableHeader';
// #endregion
// #region Constants

// #endregion

/**
 * This generic table will be used to render a table with a header and a body.
 * It will render the header based on the keys of a json object.
 * It will render the body based on the values of a json object.
 * The keys are passed to the TableHeader component.
 * The values are passed to the TableBody component.
 * @returns {JSX.Element}
 */
function Table(props: { tableData: Record<string, string>[]; }): JSX.Element {
  const { tableData } = props;
  return (
    <>
      {
        tableData.map((data: Record<string, string>, index: number) => (
          <>
            <TableHeader data={data} CustomKey={1} key={`table-header-${index * index}`} />
            <TableBody data={data} key={`table-body-${index * index * 100}`} />
          </>
        ))
      }
    </>
  );
}

export default Table;
