import React from 'react';
import { EuiSuperSelect } from '@elastic/eui';

const DropdownFilter: React.FC = () => {
  const options = [
    { inputDisplay: 'Alpha', value: 'alpha' },
    { inputDisplay: 'Beta', value: 'beta' },
    { inputDisplay: 'Charlie', value: 'charlie' },
    { inputDisplay: 'Delta', value: 'delta' },
  ];

  return (
    <div>
      <EuiSuperSelect
        fullWidth
        options={options}
      />
    </div>
  );
};

export default DropdownFilter;
