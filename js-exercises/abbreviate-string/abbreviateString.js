function abbreviateString(str) {
  try {
    const words = str.split(' ');
    return `${words[0]} ${words[words.length - 1].charAt(0).toUpperCase()}.`;
  } catch (e) {
    throw new Error('Please enter valid data');
  }
}

export { abbreviateString };
