import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Filters from './filters/Filters';
import Header from './Header';
import Table from './Table';

const Transactions: React.FC = () => (
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

export default Transactions;

