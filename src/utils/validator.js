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
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

const isURL = (value) => {
  const re = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return re.test(value);
};


export {
  length,
  isAlphanumeric,
  mustContainUpperCase,
  isEmail,
  isURL,
};
