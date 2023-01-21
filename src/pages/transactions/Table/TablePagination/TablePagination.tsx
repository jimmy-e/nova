import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiButtonEmpty, EuiText } from '@elastic/eui';
import { maxPageDisplay } from '@/constants';
import { useAppContext } from '@/context/appContext';
import TablePageNumbersComplex from './TablePageNumbersComplex';
import TablePageNumbersSimple from './TablePageNumbersSimple';

interface Props {
  dataLength: number;
}

const TablePagination: React.FC<Props> = ({ dataLength }) => {
  const { pageSize } = useAppContext();
  const nPages = Math.ceil(dataLength / pageSize.state);

  return (
    <EuiFlexGroup justifyContent="spaceBetween">
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty>
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
        <EuiButtonEmpty>
          <EuiText color="subdued">
            <b>Next</b>
          </EuiText>
        </EuiButtonEmpty>
      </EuiFlexItem>
    </EuiFlexGroup>

  );
};

export default TablePagination;
