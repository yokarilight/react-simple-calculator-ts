type DigitButtonProps = {
  digit: string;
  appendDigit: (digit: string) => void;
  buttonStyle: React.CSSProperties;
  overwrite?: boolean;
}

const DigitButton = ({ digit, appendDigit, buttonStyle, overwrite }: DigitButtonProps) => {
  const handleClick = () => {
    if (overwrite && digit === '.') {
      return;
    }

    appendDigit(digit);
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {digit}
    </button>
  );
};

export default DigitButton;
