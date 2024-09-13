import { useCalculatorStore } from './store';
import DigitButton from './components/digitButton';
import OperationButton from './components/operationButton';
import { formatOperand } from './utils';

interface CalculatorProps {
  ButtonWidth?: string;
  ButtonColor?: string;
  ButtonBackgroundColor?: string;
}

const Calculator = ({ ButtonWidth, ButtonColor, ButtonBackgroundColor }: CalculatorProps) => {
  const {
    currentOperand,
    previousOperand,
    operation,
    clear,
    deleteDigit,
    appendDigit,
    chooseOperation,
    evaluate,
    overwrite,
  } = useCalculatorStore();

  const buttonStyle = {
    color: ButtonColor || 'black',
    backgroundColor: ButtonBackgroundColor || 'rgba(0, 0, 0, .5)',
    width: ButtonWidth || '96px',
  };

  const spanTwoStyle = {
    ...buttonStyle,
    width: ButtonWidth ? `calc(${ButtonWidth} * 2)` : '192px',
  };

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div>
          {formatOperand(previousOperand)} {operation}
        </div>
        <div>{formatOperand(currentOperand)}</div>
      </div>
      <button style={spanTwoStyle} className='span-two' onClick={clear}>AC</button>
      <button style={buttonStyle} onClick={deleteDigit}>DEL</button>
      <OperationButton operation='÷' chooseOperation={chooseOperation} buttonStyle={buttonStyle} />
      <DigitButton digit='1' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='2' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='3' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <OperationButton operation='*' chooseOperation={chooseOperation} buttonStyle={buttonStyle} />
      <DigitButton digit='4' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='5' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='6' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <OperationButton operation='+' chooseOperation={chooseOperation} buttonStyle={buttonStyle} />
      <DigitButton digit='7' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='8' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='9' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <OperationButton operation='-' chooseOperation={chooseOperation} buttonStyle={buttonStyle} />
      <DigitButton digit='.' overwrite={overwrite} appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <DigitButton digit='0' appendDigit={appendDigit} buttonStyle={buttonStyle} />
      <button style={spanTwoStyle} className='span-two' onClick={evaluate}>=</button>
    </div>
  );
};

export default Calculator;
