import { ReactNode } from 'react';
import './ResultTable.css';

interface Props {
  investments: ReactNode;
}

const resultTable = ({ investments }: Props) => {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investments}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default resultTable;