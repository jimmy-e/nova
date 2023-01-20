import React from 'react';
import TableRow from './TableRow';

interface Props {
  data: any;
}

const Table: React.FC<Props> = ({ data }) => (
  <table>
    <tr>
      <th>Name</th>
      <th>Symbol</th>
      <th>Price</th>
    </tr>
    {data.map((coin, id) => (<TableRow key={`${coin.name}-${id}`} coin={coin} />))}
  </table>
);

export default Table;
