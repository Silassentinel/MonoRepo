// #region imports
import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
import TableRow from './TableRow';
// #endregion
// #region Constants
// const tableData: [] = [];
// #endregion

/**
 * This generic function component will receive the values of a json object to dynamically render a table body.
 * by mapping the data and rendering TableRows.
 * @returns {JSX.Element}
 */
function TableBody(props: { data: Record<string, string>; }): JSX.Element {
  const { data } = props;
  const keys : string[] = ToolBox.getKeys(data);
  const values : string[] = ToolBox.getValues(data);
  return (
    <>
      {
        keys.map((key: string, index: number) => (
          <TableRow
            key={`table-row-cell-${index * index}`}
            kvp={{ key: values[key.length].toString() }}
          />
        ))
}
    </>
  );
}

// /**
//       * Helper function to get all the keys of an object.
//       * @param data {Record<String,String>} object to get keys from
//       * @returns {string[]} array of keys
//       */
// const getKeys = (data: Record<string, string>): string[] => Object.keys(data);

// /**
//        *  Helper function to get all the values of an object.
//        * @param data {Record<String,String>} object to get values from
//        * @returns {string[]} array of values
//        */
// const getValues = (data: Record<string, string>): string[] => Object.values(data);

export default TableBody;
