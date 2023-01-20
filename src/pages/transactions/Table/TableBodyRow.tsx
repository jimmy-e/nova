import React from 'react';
import { Cell, Row } from '@react-stately/table';
import { Transaction } from '@/types';

interface Props {
  transaction: Transaction;
}

const TableBodyRow: React.FC<Props> = ({ transaction }) => (
  <Row>
    <Cell>{transaction.latest_state_change_at}</Cell>
    <Cell>{transaction.first_recipient_name}</Cell>
    <Cell>{transaction.template_name}</Cell>
    <Cell>{transaction.invited_by}</Cell>
    <Cell>{transaction.reviewer_names}</Cell>
    <Cell>{transaction.id}</Cell>
  </Row>
);

export default TableBodyRow;
