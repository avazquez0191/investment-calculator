import mainLogo from '../../assets/investment-calculator-logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <div>
        <img src={mainLogo} className="logo" alt="Main logo" />
        <h1>Investment Calculator</h1>
      </div>
    </>
  );
}

export default Header;