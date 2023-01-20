import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { faker } from '@faker-js/faker'

interface Props {
  cell: string;
}

const TableCellTemplate: React.FC<Props> = ({ cell }) => (
  <EuiFlexGroup direction="column" gutterSize="xs">
    <EuiFlexItem grow={false}>
      <EuiText>
        <b>{cell}</b>
      </EuiText>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiText size="xs">
        {faker.lorem.words(4)}
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default TableCellTemplate;
