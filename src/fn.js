const convertBool = (value) => {
  const falsy = [0, false, undefined, NaN, '', null];
  if (falsy.includes(value)) {
    return false;
  }
  return true;
};

module.exports = { convertBool };
