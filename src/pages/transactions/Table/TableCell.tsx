import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { stateColors } from '@/constants';
import { TableRow } from '@/types';

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
      <EuiFlexGroup direction="column" gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiText color={stateColors[cell.status]}>
            {cell.status.toUpperCase()}
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
