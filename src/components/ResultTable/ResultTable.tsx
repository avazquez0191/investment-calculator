import { calculateInvestmentResults, formatter } from "../../util/investmentHelper";
import { InvestmentYear, InvestmentResultTableProps } from '../../util/investmentModels';
import './ResultTable.css';

const resultTable = ({ inputData }: InvestmentResultTableProps) => {
  const investments = calculateInvestmentResults(inputData);
  const initialInvestment = investments[0]?.valueEndOfYear - investments[0]?.interest - investments[0]?.annualInvestment;

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
            {investments.map((investmentYear: InvestmentYear, index) => {
              const totalInterest = investmentYear.valueEndOfYear - investmentYear.annualInvestment * investmentYear.year - initialInvestment;
              const totalAmountInvested = investmentYear.valueEndOfYear - totalInterest;
              return <tr key={index}>
                <td>{investmentYear.year}</td>
                <td>{formatter.format(investmentYear.valueEndOfYear)}</td>
                <td>{formatter.format(investmentYear.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default resultTable;