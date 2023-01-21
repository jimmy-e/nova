import React from 'react';
import { EuiSelect, EuiText } from '@elastic/eui';
import { useAppContext } from '@/context/appContext';
import styles from './DropdownFilter.module.css';

interface Props {
  label: string;
  options: Array<{ text: string; value: string; }>
  type: 'reviewer' | 'state';
}

const DropdownFilter: React.FC<Props> = ({ label, options, type }) => {
  const { state, setState } = useAppContext()[type];

  return (
    <div className={styles.container}>
      <EuiText className={styles.label}>
        <p>{label}</p>
      </EuiText>
      <EuiSelect
        className={styles.select}
        options={options}
        onChange={(event) => setState(event.target.value)}
        value={state}
      />
    </div>
  );
};

export default DropdownFilter;
