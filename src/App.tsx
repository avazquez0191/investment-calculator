import { SetStateAction, useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ResultTable from './components/ResultTable/ResultTable'
import './App.css'

import { calculateInvestmentResults, formatter } from "./util/investmentHelper";

interface InvestmentYear {
  year: number
  interest: number
  valueEndOfYear: number
  annualInvestment: number
}

function App() {
  let investments: any[] = [];
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  investments = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  }).map((investmentYear: InvestmentYear, index) => {
    return <tr key={index}>
      <td>{investmentYear.year}</td>
      <td>{formatter.format(investmentYear.valueEndOfYear)}</td>
      <td>{formatter.format(investmentYear.interest)}</td>
      <td>{formatter.format(investmentYear.interest)}</td>
      <td>{formatter.format(investmentYear.annualInvestment)}</td>
    </tr>;
  });

  function handleInitialInvestmentOnChange(event: { target: { value: SetStateAction<number>; }; }) {
    setInitialInvestment(event.target.value);
  }
  function handleAnnualInvestmentOnChange(event: { target: { value: SetStateAction<number>; }; }) {
    setAnnualInvestment(event.target.value);
  }
  function handleExpectedReturnOnChange(event: { target: { value: SetStateAction<number>; }; }) {
    setExpectedReturn(event.target.value);
  }
  function handleDurationOnChange(event: { target: { value: SetStateAction<number>; }; }) {
    setDuration(event.target.value);
  }

  return (
    <>
      <Header />

      <Form initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}
        handleInitialInvestmentOnChange={handleInitialInvestmentOnChange} handleAnnualInvestmentOnChange={handleAnnualInvestmentOnChange}
        handleExpectedReturnOnChange={handleExpectedReturnOnChange} handleDurationOnChange={handleDurationOnChange}
      />

      <ResultTable investments={investments} />
    </>
  )
}

export default App
