type OperationButtonProps = {
  operation: string;
  chooseOperation: (operation: string) => void;
  buttonStyle: React.CSSProperties;
}

const OperationButton = ({ operation, chooseOperation, buttonStyle }: OperationButtonProps) => {
  return (
    <button style={buttonStyle} onClick={() => chooseOperation(operation)}>
      {operation}
    </button>
  );
};

export default OperationButton;
