import { create } from 'zustand';

interface CalculatorState {
  currentOperand: string | null;
  previousOperand: string | null;
  operation: string | null;
  overwrite: boolean;
  clear: () => void;
  deleteDigit: () => void;
  appendDigit: (digit: string) => void;
  chooseOperation: (operation: string) => void;
  evaluate: () => void;
};

export const useCalculatorStore = create<CalculatorState>((set) => ({
  currentOperand: null,
  previousOperand: null,
  operation: null,
  overwrite: false,
  clear: () => set({
    currentOperand: null,
    previousOperand: null,
    operation: null,
    overwrite: false
  }),
  deleteDigit: () => set((state) => {
    if (state.currentOperand === null) {
      return state;
    }

    if (state.currentOperand.length === 1) {
      return { currentOperand: null };
    }

    return { currentOperand: state.currentOperand.slice(0, -1) };
  }),
  appendDigit: (digit: string) => set((state) => {
    if (state.overwrite) {
      return {
        currentOperand: digit,
        overwrite: false,
      };
    }

    if (digit === '0' && state.currentOperand === '0') {
      return state;
    }

    if (digit === '.' && state.currentOperand?.includes('.')) {
      return state;
    }

    return {
      currentOperand: `${state.currentOperand || ''}${digit}`,
    };
  }),
  chooseOperation: (operation: string) => set((state) => {
    if (state.currentOperand == null && state.previousOperand == null) {
      return state;
    }

    if (state.currentOperand == null) {
      return {
        operation,
      };
    }

    if (state.previousOperand == null) {
      return {
        operation,
        previousOperand: state.currentOperand,
        currentOperand: null,
      };
    }

    return {
      operation,
      previousOperand: evaluate(state),
      currentOperand: null,
    };
  }),
  evaluate: () => set((state) => {
    if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
      return state;
    }

    return {
      overwrite: true,
      previousOperand: null,
      operation: null,
      currentOperand: evaluate(state),
    };
  }),
}));

const evaluate = (state: CalculatorState): string => {
  const prev = parseFloat(state.previousOperand!);
  const current = parseFloat(state.currentOperand!);
  if (isNaN(prev) || isNaN(current)) {
    return '';
  }
  
  let computation: number;
  switch (state.operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      return '';
  }

  return computation.toString();
};
