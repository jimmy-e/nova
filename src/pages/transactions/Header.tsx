import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <EuiFlexGroup direction="column" gutterSize="m">
    <EuiFlexItem grow={false}>
      <EuiText>
        <h1>Transactions</h1>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText color="subdued">
        <h3 className={styles.subtitle}>
          Your business contracts, including fund subscriptions and applications.
        </h3>
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Header;

