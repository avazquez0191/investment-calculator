import './Form.css';

interface Props {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
  handleInitialInvestmentOnChange: (...args: any[]) => any;
  handleAnnualInvestmentOnChange: (...args: any[]) => any;
  handleExpectedReturnOnChange: (...args: any[]) => any;
  handleDurationOnChange: (...args: any[]) => any;
}

const form = ({ initialInvestment, annualInvestment, expectedReturn, duration, handleInitialInvestmentOnChange,
  handleAnnualInvestmentOnChange, handleExpectedReturnOnChange, handleDurationOnChange }: Props) => {

  return (
    <>
      <div className="form-container">
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="number" id="initial-investment" defaultValue={initialInvestment} onChange={handleInitialInvestmentOnChange} />
          </div>
          <div className="form-column">
            <label htmlFor="anual-investment">Anual Investment</label>
            <input type="number" id="anual-investment" defaultValue={annualInvestment} onChange={handleAnnualInvestmentOnChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" id="expected-return" defaultValue={expectedReturn} onChange={handleExpectedReturnOnChange} />
          </div>
          <div className="form-column">
            <label htmlFor="duration">Duration</label>
            <input type="number" id="duration" defaultValue={duration} onChange={handleDurationOnChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default form;