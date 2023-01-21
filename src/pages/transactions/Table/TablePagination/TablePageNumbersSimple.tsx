import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiButtonEmpty } from '@elastic/eui';
import { nArray } from '@/utils';

interface Props {
  nPages: number;
}

const TablePageNumbersSimple: React.FC<Props> = ({ nPages }) => (
  <EuiFlexGroup>
    {nArray(nPages).map((n, id) => (
      <EuiFlexItem key={`page-${id}`} grow={false}>
        <EuiButtonEmpty>{id + 1}</EuiButtonEmpty>
      </EuiFlexItem>
    ))}
  </EuiFlexGroup>
);

export default TablePageNumbersSimple;
