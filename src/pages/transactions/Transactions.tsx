import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner } from '@elastic/eui';
import { GET_TRANSACTIONS } from './queries/getTransactions';
import { GetTransactionsData, GetTransactionsArgs } from '@/types';
import { useAppContext } from '@/context/appContext';
import Filters from './filters/Filters';
import Header from './Header';
import TableContainer from './Table/TableContainer';

const Transactions: React.FC = () => {
  const { search } = useAppContext();

  const [getTransactions, { data, loading }] = useLazyQuery<GetTransactionsData, GetTransactionsArgs>(
    GET_TRANSACTIONS,
    {
      variables: {
        input: {
          recipient_name: 'sample-recipient-name',
          reviewer_name: 'sample-reviewer-name',
          state: 'sample-state',
        },
      },
    },
  );

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <EuiFlexGroup direction="column" gutterSize="xl">
      <EuiFlexItem grow={false}>
        <Header />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Filters />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        {loading || !data
          ? <EuiLoadingSpinner size="xl" />
          : <TableContainer data={data.transactions} />
        }
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Transactions;
