import React from 'react';
import Dropdown from '@/pages/transactions/components/Dropdown';
import { useAppContext } from '@/context/appContext';
import { PageSize } from '@/types';

const pageSizeOptions = [
  { text: '10', value: 10 },
  { text: '25', value: 25 },
  { text: '100', value: 100 },
];

const PageSize: React.FC = () => {
  const { setState, state } = useAppContext().pagination.pageSize;

  return (
    <Dropdown
      label="Page Size"
      onChange={(value) => setState(Number(value) as PageSize)}
      options={pageSizeOptions}
      value={state}
    />
  );
};

export default PageSize;
