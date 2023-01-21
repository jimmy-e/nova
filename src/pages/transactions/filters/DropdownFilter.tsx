import React from 'react';
import { useAppContext } from '@/context/appContext';
import Dropdown from '@/components/Dropdown/Dropdown';

interface Props {
  label: string;
  options: Array<{ text: string; value: string; }>
  type: 'reviewer' | 'state';
}

const DropdownFilter: React.FC<Props> = ({ label, options, type = 'reviewer' }) => {
  const { state, setState } = useAppContext().filters[type];

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
