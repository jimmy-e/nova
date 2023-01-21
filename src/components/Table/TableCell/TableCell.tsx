import React from 'react';
import { EuiText } from '@elastic/eui';
import { TableCell, TableRow } from '@/types';
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

const TableCell: React.FC<Props> = ({ columnKey, item = {} }) => {
  const cell = item[columnKey];

  switch (columnKey) {
    case 'invited_by':
      return <TableCellInvitedBy cell={cell as string} />
    case 'last_updated':
      return <TableCellLastUpdated cell={cell as TableCell} />;
    case 'recipient':
      return <TableCellRecipient cell={cell as TableCell} />;
    case 'reviewers':
      return <TableCellReviewer cell={cell as Array<string>} />;
    case 'template':
      return <TableCellTemplate cell={cell as TableCell} />;
    case 'unique_id':
      return <TableCellUniqueID cell={cell as string} />;
    default:
      return <EuiText>{cell as string}</EuiText>;
  }
};

export default TableCell;
