import React from 'react';
import { EuiFieldText, EuiFormControlLayout, EuiText } from '@elastic/eui';
import { useAppContext } from '@/context/appContext';
import styles from './Search.module.css';

const Search: React.FC = () => {
  const { state, setState } = useAppContext().filters.recipient;

  let formControlProps: Record<string, Record<string, () => void>> = {};

  if (state) {
    formControlProps.clear = {
      onClick: () => setState('')
    };
  }

  return (
    <div className={styles.container}>
      <EuiText className={styles.label}>
        <p>Recipient</p>
      </EuiText>
      <EuiFormControlLayout className="search-bar-form-control" {...formControlProps}>
        <EuiFieldText
          className={styles.fieldText}
          onChange={(event) => setState(event.target.value)}
          placeholder="Start your search..."
          value={state}
        />
      </EuiFormControlLayout>
    </div>
  );
};

export default Search;
