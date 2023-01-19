import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import DropdownFilter from './DropdownFilter';
import styles from './FilterOptions.module.css';

const FilterOptions: React.FC = () => (
  <EuiFlexGroup alignItems="center">
    <EuiFlexItem grow={false}>
      <EuiText color="subdued">
        <h3 className={styles.label}>Filtering by</h3>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <DropdownFilter />
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <DropdownFilter />
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default FilterOptions;
