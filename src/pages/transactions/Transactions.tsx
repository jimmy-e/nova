import React from 'react';
import { useQuery } from '@apollo/client';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { GET_TRANSACTIONS } from '@/queries/getTransactions';
import { GetTransactionsData, GetTransactionsArgs } from '@/types';
import { useAppContext } from '@/context/appContext';
import Filters from './filters/Filters';
import Header from './Header';
import TableContainer from '@/components/Table/TableContainer';

const Transactions: React.FC = () => {
  const { filters, pagination } = useAppContext();

  const { data, loading } = useQuery<GetTransactionsData, GetTransactionsArgs>(
    GET_TRANSACTIONS,
    {
      onCompleted: (result) => pagination.validEntries.setState(result.transactions.valid_entries),
      variables: {
        input: {
          page_number: pagination.pageNumber.state,
          page_size: pagination.pageSize.state,
          recipient_name: filters.recipient.state,
          reviewer_name: filters.reviewer.state,
          state: filters.state.state,
        },
      },
    },
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
        <TableContainer data={data?.transactions.transactions} loading={loading} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Transactions;
