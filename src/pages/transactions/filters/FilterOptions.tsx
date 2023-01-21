import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { reviewers, states } from '@/constants';
import DropdownFilter from './DropdownFilter';
import styles from './FilterOptions.module.css';

const FilterOptions: React.FC = () => {
  const reviewerOptions = [{ text: 'All', value: '' }];
  reviewers.forEach((reviewer) => reviewerOptions.push({
    text: reviewer.label, value: reviewer.value
  }));

  const stateOptions = [{ text: 'All', value: '' }];
  states.forEach((state) => stateOptions.push({
    text: state.label, value: state.value
  }));

  return (
    <EuiFlexGroup alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiText color="subdued">
          <h3 className={styles.label}>Filtering by</h3>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <DropdownFilter label="Status" options={stateOptions} type="state"/>
      </EuiFlexItem>
      <EuiFlexItem>
        <DropdownFilter label="Reviewer" options={reviewerOptions} type="reviewer"/>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default FilterOptions;
