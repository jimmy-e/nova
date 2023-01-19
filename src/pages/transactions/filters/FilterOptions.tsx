import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
// import StatusFilter from './StatusFilter';
import styles from './FilterOptions.module.css';

const FilterOptions: React.FC = () => (
  <EuiFlexGroup alignItems="center">
    <EuiFlexItem grow={false}>
      <EuiText>
        <h3 className={styles.label}>Filtering by</h3>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      status filter
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      reviewer filter
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default FilterOptions;
