import React, { useState } from 'react';
import { EuiFieldText, EuiFormControlLayout } from '@elastic/eui';
import styles from './Search.module.css';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>();

  let formControlProps: Record<string, Record<string, () => void>> = {};

  if (searchValue) {
    formControlProps.clear = {
      onClick: () => setSearchValue('')
    };
  }

  return (
    <EuiFormControlLayout {...formControlProps}>
      <EuiFieldText
        className={styles.fieldText}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Start your search..."
        value={searchValue}
      />
    </EuiFormControlLayout>
  );
};

export default Search;
