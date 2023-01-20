import React from 'react';
import Table from './Table';
import Pagination from './Pagination';

interface Props {
  data: any;
  onNext: () => void;
  onPrevious: () => void;
}

const TableContainer: React.FC<Props> = ({ data, onNext, onPrevious }) => (
  <>
    <Pagination onNext={onNext} onPrevious={onPrevious} />
    <Table data={data} />
  </>
);

export default TableContainer;
