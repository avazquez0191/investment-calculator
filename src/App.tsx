import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ResultTable from './components/ResultTable/ResultTable';
import './App.css';

function App() {
  const [form, setForm] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  function handleFormOnChange(property: string, value: number) {
    setForm(oldForm => {
      return {
        ...oldForm,
        [property]: +value
      };
    });
  }

  return (
    <>
      <Header />

      <Form inputData={form} onChange={handleFormOnChange} />

      <ResultTable inputData={form} />
    </>
  )
}

export default App
