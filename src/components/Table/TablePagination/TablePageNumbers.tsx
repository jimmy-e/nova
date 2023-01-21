import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiButtonEmpty, EuiText } from '@elastic/eui';
import { arrayRange } from '@/utils';
import { useAppContext } from '@/context/appContext';

interface Props {
  nPages: number;
}

const TablePageNumbers: React.FC<Props> = ({ nPages }) => {
  const { setState, state } = useAppContext().pagination.pageNumber;

  let indexStart;
  let indexEnd;

  if (state + 4 <= nPages) {
    indexStart = state;
    indexEnd = state + 4;
  } else {
    indexStart = nPages - 4;
    indexEnd = nPages;
  }

  const pages = arrayRange(indexStart, indexEnd);

  return (
    <EuiFlexGroup alignItems="baseline" gutterSize="s">
      {state > 1 && (
        <EuiFlexItem grow={false}>
          <EuiText color="subdued">
            <b>...</b>
          </EuiText>
        </EuiFlexItem>
      )}
      {pages.map((pageNumber) => (
        <EuiFlexItem key={`page-${pageNumber}`} grow={false}>
          <EuiButtonEmpty onClick={() => setState(pageNumber)}>
            <EuiText color={pageNumber === state ? 'primary' : 'subdued'}>
              <b>{pageNumber}</b>
            </EuiText>
          </EuiButtonEmpty>
        </EuiFlexItem>
      ))}
      {state + 4 < nPages && (
        <EuiFlexItem grow={false}>
          <EuiText color="subdued">
            <b>...</b>
          </EuiText>
        </EuiFlexItem>
      )}
    </EuiFlexGroup>
  );
};

export default TablePageNumbers;
