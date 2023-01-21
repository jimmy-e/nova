import React from 'react';
import { EuiSelect, EuiText } from '@elastic/eui';
import styles from './Dropdown.module.css';

interface Props {
  label: string;
  onChange: (value: number | string) => void;
  options: Array<{ text: string; value: number | string; }>
  value?: number | string;
}

const Dropdown: React.FC<Props> = ({ label, options, onChange, value }) => (
  <div className={styles.container}>
    <EuiText className={styles.label}>
      <p>{label}</p>
    </EuiText>
    <EuiSelect
      className={styles.select}
      options={options}
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  </div>
);

export default Dropdown;
