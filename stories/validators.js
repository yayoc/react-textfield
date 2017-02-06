import { length, isAlphanumeric, mustContainUpperCase, isEmail, isURL } from '../src/utils/validator';

export const usernameValidators = [
  {
    message: 'Username must be 4 - 12 characters',
    validator: value => length(value, { min: 4, max: 12 }),
  },
  {
    message: 'Username must be alphanumeric.',
    validator: value => isAlphanumeric(value),
  },
];

export const passwordValidators = [
  {
    message: 'Password must be at least 8 characters long',
    validator: value => length(value, { min: 8, max: 16 }),
  },
  {
    message: 'Password must be alphanumeric.',
    validator: value => isAlphanumeric(value),
  },
  {
    message: 'Password must contain at least one upper case letter.',
    validator: value => mustContainUpperCase(value),
  },
];

export const emailValidators = [
  {
    message: 'Wrong email format.',
    validator: value => isEmail(value),
  },
];

export const urlValidators = [
  {
    message: 'Wrong URL format.',
    validator: value => isURL(value),
  },
];

