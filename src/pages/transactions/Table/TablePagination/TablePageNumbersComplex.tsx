import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiButtonEmpty } from '@elastic/eui';
import { nArray } from '@/utils';

interface Props {
  nPages: number;
}

const TablePageNumbersComplex: React.FC<Props> = ({ nPages }) => {
  const maxPageDisplay = 7;
  const nPagesDisplay = maxPageDisplay < nPages ? maxPageDisplay : nPages;

  // return (
  //   <FirstPages />
  //   <>...</>
  //   <LastPages/>
  // );
  return (
    <EuiFlexGroup>
      {nArray(nPagesDisplay).map((n, id) => (
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty>{id + 1}</EuiButtonEmpty>
        </EuiFlexItem>
      ))}
    </EuiFlexGroup>
  );
};

export default TablePageNumbersComplex;