import { InvestmentFormProps } from '../../util/investmentModels';
import './Form.css';

const form = ({ inputData, onChange }: InvestmentFormProps) => {

  return (
    <>
      <div className="form-container">
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="number" id="initial-investment" defaultValue={inputData.initialInvestment} onChange={(event)=>onChange('initialInvestment', event.target.value)} />
          </div>
          <div className="form-column">
            <label htmlFor="anual-investment">Anual Investment</label>
            <input type="number" id="anual-investment" defaultValue={inputData.annualInvestment} onChange={(event)=>onChange('annualInvestment', event.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" id="expected-return" defaultValue={inputData.expectedReturn} onChange={(event)=>onChange('expectedReturn', event.target.value)} />
          </div>
          <div className="form-column">
            <label htmlFor="duration">Duration</label>
            <input type="number" id="duration" defaultValue={inputData.duration} onChange={(event)=>onChange('duration', event.target.value)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default form;