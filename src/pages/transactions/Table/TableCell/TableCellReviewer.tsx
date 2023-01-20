import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Reviewer from './Reviewer';

interface Props {
  cell: Array<string>;
}

const TableCellReviewer: React.FC<Props> = ({ cell }) => (
  <EuiFlexGroup gutterSize="xs">
    {cell.map((reviewer, id) => (
      <EuiFlexItem key={`${reviewer}-${id}`} grow={false}>
        <Reviewer reviewer={reviewer} />
      </EuiFlexItem>
    ))}
  </EuiFlexGroup>
);

export default TableCellReviewer;
