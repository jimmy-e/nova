import React from 'react';
import { TableData } from '@/types';
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner } from '@elastic/eui';
import Table from './Table';
import TablePagination from './TablePagination/TablePagination';
import styles from './TableContainer.module.css';

interface Props {
  data?: TableData;
  loading: boolean;
}

const TableContainer: React.FC<Props> = ({ data, loading }) => {
  if (loading || !data) {
    return (
      <EuiFlexGroup className={styles.container} alignItems="center" justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiLoadingSpinner size="xxl"/>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  return (
    <EuiFlexGroup className={styles.container} direction="column" justifyContent="spaceBetween">
      <EuiFlexItem grow={false}>
        <Table data={data} />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <TablePagination />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default TableContainer;
