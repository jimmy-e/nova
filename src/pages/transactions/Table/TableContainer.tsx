import React from 'react';
import { TableData } from '@/types';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Table from './Table';
import TablePagination from './TablePagination/TablePagination';
import { pageSize } from '@/constants';
import styles from './TableContainer.module.css';

interface Props {
  data: TableData;
}

const TableContainer: React.FC<Props> = ({ data }) => {
  const finalTableData = data.slice(0, pageSize);

  return (
    <EuiFlexGroup className={styles.container} direction="column">
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
