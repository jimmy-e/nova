import React from 'react';
import { EuiText } from '@elastic/eui';
import { TableRow } from '@/types';
import TableCellInvitedBy from './TableCellInvitedBy';
import TableCellLastUpdated from './TableCellLastUpdated';
import TableCellRecipient from './TableCellRecipient';
import TableCellReviewer from './TableCellReviewer';
import TableCellTemplate from './TableCellTemplate';
import TableCellUniqueID from './TableCellUniqueID';

interface Props {
  columnKey: string;
  item: TableRow;
}

const TableCell: React.FC<Props> = ({ columnKey, item }) => {
  const cell = item[columnKey];

  switch (columnKey) {
    case 'invited_by':
      return <TableCellInvitedBy cell={cell} />
    case 'last_updated':
      return <TableCellLastUpdated cell={cell} />;
    case 'recipient':
      return <TableCellRecipient cell={cell} />;
    case 'reviewers':
      return <TableCellReviewer cell={cell} />;
    case 'template':
      return <TableCellTemplate cell={cell} />;
    case 'unique_id':
      return <TableCellUniqueID cell={cell} />;
    default:
      return <EuiText>{cell}</EuiText>;
  }
};

export default TableCell;
