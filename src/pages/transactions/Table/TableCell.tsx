import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { stateColors } from '@/constants';
import { TableRow } from '@/types';
import { startCase } from 'lodash';
import styles from './TableCell.module.css';

interface Props {
  columnKey: string;
  item: TableRow;
}

const TableCell: React.FC<Props> = ({ columnKey, item }) => {
  console.log(columnKey);
  console.log(item);
  const cell = item[columnKey];

  if (columnKey === 'last_updated') {
    return (
      <EuiFlexGroup direction="column" gutterSize="xs">
        <EuiFlexItem grow={false}>
          <EuiText
            className={styles[stateColors[cell.status]]}
            color={cell.status === 'invited' ? 'subdued' : undefined}
          >
            <b>
              {startCase(cell.status)}
            </b>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText size="xs">
            {cell.days_ago}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  return <EuiText>{cell}</EuiText>;
};

export default TableCell;
