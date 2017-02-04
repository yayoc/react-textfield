const length = (value, option) => {
  const { min, max } = option;
  return min <= value.length && value.length <= max;
};

const isAlphanumeric = (value) => {
  return value.match(/^[a-z0-9]+$/i) !== null;
};

const mustContainUpperCase = (value) => {
  return value.match(/[A-Z]/) !== null;
};

const isEmail = (value) => {
  return false;
};

const isUrl = (value) => {
  return false;
};

const isTel = (value) => {
  return false;
};


export {
  length,
  isAlphanumeric,
  mustContainUpperCase,
  isEmail,
};
