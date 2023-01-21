import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import styles from './Filters.module.css';
import FilterOptions from './FilterOptions';
import PageSize from './PageSize';
import Search from './Search';

const Filters: React.FC = () => (
  <EuiFlexGroup justifyContent="spaceBetween">
    <EuiFlexItem grow={false}>
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
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <PageSize />
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Filters;
