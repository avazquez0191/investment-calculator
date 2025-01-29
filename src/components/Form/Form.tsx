import './Form.css';

interface Props {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
  handleFormOnChange: (...args: any[]) => any;
}

const form = ({ initialInvestment, annualInvestment, expectedReturn, duration, handleFormOnChange }: Props) => {

  return (
    <>
      <div className="form-container">
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="number" id="initial-investment" defaultValue={initialInvestment} onChange={(event)=>handleFormOnChange('initialInvestment', event.target.value)} />
          </div>
          <div className="form-column">
            <label htmlFor="anual-investment">Anual Investment</label>
            <input type="number" id="anual-investment" defaultValue={annualInvestment} onChange={(event)=>handleFormOnChange('annualInvestment', event.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" id="expected-return" defaultValue={expectedReturn} onChange={(event)=>handleFormOnChange('expectedReturn', event.target.value)} />
          </div>
          <div className="form-column">
            <label htmlFor="duration">Duration</label>
            <input type="number" id="duration" defaultValue={duration} onChange={(event)=>handleFormOnChange('duration', event.target.value)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default form;