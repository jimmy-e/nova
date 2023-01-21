import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { stateColors } from '@/constants';
import { TableCell } from '@/types';
import { startCase } from 'lodash';
import styles from './TableCell.module.css';

interface Props {
  cell: TableCell;
}

const TableCellLastUpdated: React.FC<Props> = ({ cell }) => (
  <EuiFlexGroup direction="column" gutterSize="xs">
    <EuiFlexItem grow={false}>
      <EuiText
        className={styles[stateColors[cell?.status]]}
        color={cell?.status === 'invited' ? 'subdued' : undefined}
      >
        <b>{startCase(cell?.status)}</b>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText size="xs">
        {cell?.days_ago}
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default TableCellLastUpdated;
