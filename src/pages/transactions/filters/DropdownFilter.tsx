import React from 'react';
import { EuiSelect, EuiText } from '@elastic/eui';
import styles from './DropdownFilter.module.css';

interface Props {
  label: string;
}

const DropdownFilter: React.FC<Props> = ({ label }) => {
  const options = [
    { text: 'Alpha', value: 'alpha' },
    { text: 'Beta', value: 'beta' },
    { text: 'Charlie', value: 'charlie' },
    { text: 'Delta', value: 'delta' },
  ];

  return (
    <div className={styles.container}>
      <EuiText className={styles.label}>
        <p>{label}</p>
      </EuiText>
      <EuiSelect
        className={styles.select}
        options={options}
      />
    </div>
  );
};

export default DropdownFilter;
