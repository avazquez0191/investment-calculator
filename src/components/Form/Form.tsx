import './Form.css';

const form = () => {
  return (
    <>
      <h1>Form</h1>
      <div className="form-container">
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="field1">Initial Investment</label>
            <input type="number" id="field1" placeholder="Field 1" />
          </div>
          <div className="form-column">
            <label htmlFor="field2">Anual Investment</label>
            <input type="number" id="field2" placeholder="Field 2" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="field3">Expected Return</label>
            <input type="number" id="field3" placeholder="Field 3" />
          </div>
          <div className="form-column">
            <label htmlFor="field4">Duration</label>
            <input type="number" id="field4" placeholder="Field 4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default form;