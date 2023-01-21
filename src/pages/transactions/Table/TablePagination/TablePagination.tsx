import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiButtonEmpty, EuiText } from '@elastic/eui';
import { maxPageDisplay } from '@/constants';
import { useAppContext } from '@/context/appContext';
import TablePageNumbersComplex from './TablePageNumbersComplex';
import TablePageNumbersSimple from './TablePageNumbersSimple';

const TablePagination: React.FC = () => {
  const { pageNumber, pageSize, validEntries } = useAppContext().pagination;
  const nPages = Math.ceil(validEntries.state / pageSize.state);

  const handleNext = () => {
    if (pageNumber.state < nPages) {
      pageNumber.setState((previous) => previous + 1);
    }
  };

  const handlePrevious = () => {
    if (pageNumber.state > 1) {
      pageNumber.setState((previous) => previous - 1);
    }
  };

  console.log('page number: ', pageNumber.state);

  return (
    <EuiFlexGroup justifyContent="spaceBetween">
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty disabled={pageNumber.state === 1} onClick={handlePrevious}>
          <EuiText color="subdued">
            <b>Previous</b>
          </EuiText>
        </EuiButtonEmpty>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        {maxPageDisplay < nPages
          ? <TablePageNumbersComplex nPages={nPages} />
          : <TablePageNumbersSimple nPages={nPages} />
        }
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty disabled={pageNumber.state === nPages} onClick={handleNext}>
          <EuiText color="subdued">
            <b>Next</b>
          </EuiText>
        </EuiButtonEmpty>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default TablePagination;
