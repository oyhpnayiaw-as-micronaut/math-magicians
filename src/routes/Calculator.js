import CalculatorComponent from 'components/Calculator';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  padding: '1rem',
};

const h2Style = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

const Calculator = () => (
  <div style={styles}>
    <h2 style={h2Style}>Let&apos;s do some math!</h2>
    <CalculatorComponent />
  </div>
);

export default Calculator;
