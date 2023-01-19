import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import styles from './Filters.module.css';
import FilterOptions from './FilterOptions';
import Search from './Search';

const Filters: React.FC = () => (
  <EuiFlexGroup>
    <EuiFlexItem grow={false}>
      <Search />
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <div className={styles.verticalBar} />
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <FilterOptions />
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Filters;
