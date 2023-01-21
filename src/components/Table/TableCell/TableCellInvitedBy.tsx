import React from 'react';
import { EuiText } from '@elastic/eui';

interface Props {
  cell: string;
}

const TableCellInvitedBy: React.FC<Props> = ({ cell }) => <EuiText>{cell}</EuiText>;

export default TableCellInvitedBy;
