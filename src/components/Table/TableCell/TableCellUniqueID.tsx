import React from 'react';
import { EuiText } from '@elastic/eui';

interface Props {
  cell: string;
}

const TableCellUniqueID: React.FC<Props> = ({ cell }) => (
  <EuiText>
    <b>{cell}</b>
  </EuiText>
);

export default TableCellUniqueID;
