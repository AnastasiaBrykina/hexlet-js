const capitalize = (string) => {
  if (string === '') {
    return '';
  }

  const firstLetter = string[0].toUpperCase();

  return `${firstLetter}${string.slice(1).toLowerCase()}`;
};

export default capitalize;
