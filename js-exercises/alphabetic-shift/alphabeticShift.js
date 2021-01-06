const alphabeticShift = (input) => {
  let shiftedString = '';
  for (const char of input) {
    shiftedString += String.fromCharCode(char.charCodeAt(0) + 1);
  }

  return shiftedString;
};

export { alphabeticShift };
