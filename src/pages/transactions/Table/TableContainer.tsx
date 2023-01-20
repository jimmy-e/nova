import React from 'react';
import { TableData } from '@/types';
import Table from './Table';

interface Props {
  data: TableData;
}

const TableContainer: React.FC<Props> = ({ data }) => <Table data={data} />;

export default TableContainer;
