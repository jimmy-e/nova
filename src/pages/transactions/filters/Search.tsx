import React from 'react';
import { EuiFieldText, EuiFormControlLayout } from '@elastic/eui';
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
    <EuiFormControlLayout className="search-bar-form-control" {...formControlProps}>
      <EuiFieldText
        className={styles.fieldText}
        onChange={(event) => setState(event.target.value)}
        placeholder="Start your search..."
        value={state}
      />
    </EuiFormControlLayout>
  );
};

export default Search;
