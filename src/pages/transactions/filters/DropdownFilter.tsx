import React from 'react';
import { EuiSelect } from '@elastic/eui';
import styles from './DropdownFilter.module.css';

const DropdownFilter: React.FC = () => {
  const options = [
    { text: 'Alpha', value: 'alpha' },
    { text: 'Beta', value: 'beta' },
    { text: 'Charlie', value: 'charlie' },
    { text: 'Delta', value: 'delta' },
  ];

  return (
    <EuiSelect
      className={styles.select}
      options={options}
    />
  );
};

export default DropdownFilter;
