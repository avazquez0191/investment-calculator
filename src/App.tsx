import { useState } from 'react';
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
  const [form, setForm] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  investments = calculateInvestmentResults({
    initialInvestment: Number(form.initialInvestment),
    annualInvestment: Number(form.annualInvestment),
    expectedReturn: Number(form.expectedReturn),
    duration: Number(form.duration)
  }).map((investmentYear: InvestmentYear, index) => {
    return <tr key={index}>
      <td>{investmentYear.year}</td>
      <td>{formatter.format(investmentYear.valueEndOfYear)}</td>
      <td>{formatter.format(investmentYear.interest)}</td>
      <td>{formatter.format(investmentYear.interest)}</td>
      <td>{formatter.format(investmentYear.annualInvestment)}</td>
    </tr>;
  });

  function handleFormOnChange(property: string, value: number) {
    setForm(oldForm => {
      return {
        ...oldForm,
        [property]: value
      };
    });
  }

  return (
    <>
      <Header />

      <Form initialInvestment={form.initialInvestment} annualInvestment={form.annualInvestment}
        expectedReturn={form.expectedReturn} duration={form.duration} handleFormOnChange={handleFormOnChange}
      />

      <ResultTable investments={investments} />
    </>
  )
}

export default App
