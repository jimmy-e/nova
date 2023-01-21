import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { TableCell } from '@/types';

interface Props {
  cell: TableCell;
}

const TableCellTemplate: React.FC<Props> = ({ cell }) => (
  <EuiFlexGroup direction="column" gutterSize="xs">
    <EuiFlexItem grow={false}>
      <EuiText>
        <b>{cell?.name}</b>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText size="xs">
        {cell?.child_name}
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default TableCellTemplate;
