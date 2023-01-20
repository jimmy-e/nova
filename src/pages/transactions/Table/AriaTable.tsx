import React, { useRef } from 'react';
import { useTable } from 'react-aria';
import { TableStateProps, useTableState } from 'react-stately';

const AriaTable: React.FC<TableStateProps<object>> = (props) => {
  const state = useTableState(props);
  const ref = useRef<HTMLTableElement | null>(null);

  const { collection } = state;
  const { gridProps } = useTable({}, state, ref);

  return (
    <table {...gridProps} ref={ref}>
      <thead>
        {collection.headerRows.map((headerRow) => (
          <tr key={headerRow.key}>
            {[...headerRow.childNodes].map((column) =>
              <th
                key={column.key}
              >
                {column.rendered}
              </th>
            )}
          </tr>
        ))}
      </thead>
      <tbody>
        {[...collection.body.childNodes].map((row) => (
          <tr key={row.key}>
            {[...row.childNodes].map((cell) =>
              <td key={cell.key}>
                {cell.rendered}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AriaTable;

