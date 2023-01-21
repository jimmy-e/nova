import React from 'react';
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
} from '@react-stately/table';
import AriaTable from './AriaTable';
import TableCell from './TableCell/TableCell';
import { TableData, TableRow } from '@/types';
import { daysAgo } from '@/utils';

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

  const rows = data?.map((transaction, id): TableRow => {
    return {
      id: id + 1,
      invited_by: transaction.invited_by,
      last_updated: {
        days_ago: daysAgo(transaction.latest_state_change_at),
        status: transaction.state,
      },
      recipient: {
        email: transaction.first_recipient_email || '',
        name: transaction.first_recipient_name || '',
      },
      reviewers: transaction.reviewer_names || [],
      template: {
        child_name: transaction.template_child_name,
        name: transaction.template_name,
      },
      unique_id: transaction.id,
    };
  });

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
            {(columnKey) => (
              <Cell>
                <TableCell columnKey={columnKey as string} item={item} />
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </AriaTable>
  );
};

export default Table;
