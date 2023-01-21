import React from 'react';
import { EuiText } from '@elastic/eui';
import { startCase } from 'lodash';
import styles from './Reviewer.module.css';

interface Props {
  reviewer: string;
}

const Reviewer: React.FC<Props> = ({ reviewer }) => (
  <div className={[styles.container, styles[reviewer]].join(' ')}>
    <EuiText>
      <b>{startCase(reviewer)}</b>
    </EuiText>
  </div>
);

export default Reviewer;
