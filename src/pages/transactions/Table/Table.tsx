import React from 'react';
import {
  Row,
  Column,
  TableHeader,
  TableBody,
  Cell, TableHeader as AriaTableHeader
} from '@react-stately/table';
import AriaTable from './AriaTable';
import { TableData } from '@/types';
// import TableHeader from './TableHeader';

interface Props {
  data: TableData;
}

const Table: React.FC<Props> = ({ data }) => {
  const columns = [
    { name: 'Last Updated', uid: 'last_updated' },
    { name: 'Recipient', uid: 'recipient' },
    { name: 'Template', uid: 'template' },
    { name: 'Invited By', uid: 'invited_by' },
    { name: 'Reviewers', uid: 'reviewers' },
    { name: 'Unique ID', uid: 'unique_id' },
  ];

  const rows = data.map((transaction, id) => ({
    id: id + 1,
    invited_by: transaction.invited_by,
    last_updated: transaction.latest_state_change_at,
    recipient: transaction.first_recipient_name,
    reviewers: transaction.reviewer_names,
    template: transaction.template_name,
    unique_id: transaction.id,
  }));

  return (
    <AriaTable>
      <TableHeader columns={columns}>
        {(column) => (
          <Column key={column.uid}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </AriaTable>
  );
};

export default Table;
