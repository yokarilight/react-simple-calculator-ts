export const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0
});

export const formatOperand = (operand: string | null) => {
  if (operand === null) {
    return;
  }

  const [ integer, decimal ] = operand.split('.');

  const formattedInteger = integer ? INTEGER_FORMATTER.format(Number(integer)) : '';

  if (decimal) {
    return `${formattedInteger}.${decimal}`;
  } else {
    return formattedInteger;
  }
}

export const toCapitalizeFirstLetter = (str: string) => {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}
