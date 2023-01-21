import React from 'react';
import Dropdown from '@/pages/transactions/components/Dropdown';
import {useAppContext} from '@/context/appContext';

const pageSizeOptions = [
  { text: '10', value: 10 },
  { text: '25', value: 25 },
  { text: '100', value: 100 },
];

const PageSize: React.FC = () => {
  const { setState, state } = useAppContext().pageSize;

  return (
    <Dropdown
      label="Page Size"
      onChange={(value) => setState(value)}
      options={pageSizeOptions}
      value={state}
    />
  );
};

export default PageSize;
