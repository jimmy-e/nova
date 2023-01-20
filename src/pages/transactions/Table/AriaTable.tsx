import React, { useRef } from 'react';
import { useTable } from 'react-aria';
import { EuiText } from '@elastic/eui';
import { TableStateProps, useTableState } from 'react-stately';
import styles from './AriaTable.module.css';

const AriaTable: React.FC<TableStateProps<object>> = (props) => {
  const state = useTableState(props);
  const ref = useRef<HTMLTableElement | null>(null);

  const { collection } = state;
  const { gridProps } = useTable({}, state, ref);

  return (
    <table {...gridProps} ref={ref}>
      <thead className={styles.thead}>
        {collection.headerRows.map((headerRow) => (
          <tr key={headerRow.key} className={styles.tr}>
            {[...headerRow.childNodes].map((column) =>
              <th key={column.key} className={styles.th}>
                <EuiText color="subdued">
                  {column.rendered}
                </EuiText>
              </th>
            )}
          </tr>
        ))}
      </thead>
      <tbody>
        {[...collection.body.childNodes].map((row) => (
          <tr key={row.key} className={styles.tr}>
            {[...row.childNodes].map((cell) =>
              <td key={cell.key} className={styles.td}>
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

