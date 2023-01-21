import React from 'react';
import { useAppContext } from '@/context/appContext';
import Dropdown from '@/pages/transactions/components/Dropdown';

interface Props {
  label: string;
  options: Array<{ text: string; value: string; }>
  type: 'reviewer' | 'state';
}

const DropdownFilter: React.FC<Props> = ({ label, options, type }) => {
  const { state, setState } = useAppContext()[type];

  return (
    <Dropdown
      label={label}
      options={options}
      onChange={(value) => setState(value as string)}
      value={state}
    />
  );
};

export default DropdownFilter;
