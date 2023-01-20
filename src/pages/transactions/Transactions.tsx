import React from 'react';
import { useQuery } from '@apollo/client';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { GET_TRANSACTIONS } from './queries/getTransactions';
import { Transaction } from '@/types';
import Filters from './filters/Filters';
import Header from './Header';
import Table from './Table';

const Transactions: React.FC = () => {
  useQuery<Array<Transaction>>(
    GET_TRANSACTIONS,
    {
      onCompleted: (data) => console.log(data),
    }
  );

  return (
    <EuiFlexGroup direction="column" gutterSize="xl">
      <EuiFlexItem grow={false}>
        <Header />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Filters />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Table />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Transactions;

