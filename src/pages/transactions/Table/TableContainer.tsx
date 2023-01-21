import React from 'react';
import { TableData } from '@/types';
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner } from '@elastic/eui';
import Table from './Table';
import TablePagination from './TablePagination/TablePagination';
import styles from './TableContainer.module.css';

interface Props {
  data?: TableData;
  loading: boolean;
  pageSize: number;
}

const TableContainer: React.FC<Props> = ({ data, loading, pageSize }) => {
  if (loading || !data) {
    return (
      <EuiFlexGroup className={styles.container} alignItems="center" justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiLoadingSpinner size="xxl"/>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  const finalTableData = data.slice(0, pageSize);

  return (
    <EuiFlexGroup className={styles.container} direction="column" justifyContent="spaceBetween">
      <EuiFlexItem grow={false}>
        <Table data={finalTableData} />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <TablePagination dataLength={data.length} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default TableContainer;
