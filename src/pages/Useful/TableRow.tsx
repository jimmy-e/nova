import React from 'react';

interface Props {
  coin: any;
}

const TableRow: React.FC<Props> = ({ coin }) => (
  <tr>
    <td>{coin.name}</td>
    <td>{coin.symbol}</td>
    <td>
      ${(Math.round(coin.priceUsd * 100) / 100).toFixed(2)}
    </td>
  </tr>
);

export default TableRow;
