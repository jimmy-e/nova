import React from 'react';
import { TableData } from '@/types';
import Table from './Table';
import styles from './TableContainer.module.css';

interface Props {
  data: TableData;
}

const TableContainer: React.FC<Props> = ({ data }) => {
  const finalTableData = data.slice(0, 10);

  return (
    <div className={styles.container}>
      <Table data={finalTableData} />
    </div>
  );
};

export default TableContainer;
