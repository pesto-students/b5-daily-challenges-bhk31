function duplicateLetters(args) {
  const arrString = args.split('');
  const arrKeyedString = {};

  arrString.map((element) => {
    if (Object.keys(arrKeyedString).includes(element)) {
      if (Array.isArray(arrKeyedString[element])) {
        arrKeyedString[element].push(element);
      }
    } else {
      arrKeyedString[element] = [element];
    }
    return arrKeyedString;
  });

  const arrCount = [];

  for (let i = 0; i < Object.keys(arrKeyedString).length; i += 1) {
    arrCount.push(arrKeyedString[Object.keys(arrKeyedString)[i]].length);
  }

  arrCount.sort();

  if (arrCount[arrCount.length - 1] >= 2) {
    return arrCount[arrCount.length - 1];
  }

  return false;
}

export { duplicateLetters };
