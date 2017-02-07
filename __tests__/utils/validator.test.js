import { length,
         isAlphanumeric,
         mustContainUpperCase,
         isEmail,
         isURL,
       } from '../../src/utils/validator';


describe('length', () => {
  it('returns true if args is fulfill the requirement of length.', () => {
    const testValue = 'Asss';
    expect(length(testValue, { min: 0, max: 4 })).toBeTruthy();
  });

  it('returns false if args is not fullfill the requirement of length.', () => {
    const testValue = 'Asss';
    expect(length(testValue, { min: 0, max: 2 })).toBeFalsy();
  });
});


describe('mustContainUpperCase', () => {
  it('returns true if args contains upper case chracters.', () => {
    const testValue = 'Asss';
    expect(mustContainUpperCase(testValue)).toBeTruthy();
  });
});

describe('isAlphanumeric', () => {
  it('returns true if args is alphanumeric.', () => {
    const testValue = 'abcdef';
    expect(isAlphanumeric(testValue)).toBeTruthy();
  });
  it('returns false if args is not alphanumeric.', () => {
    const testValue = 'ca--!';
    expect(isAlphanumeric(testValue)).toBeFalsy();
  });
});

describe('isEmail', () => {
  it('returns true if args is email format.', () => {
    const testValue = 'email@yayoc.com';
    expect(isEmail(testValue)).toBeTruthy();
  });
  it('returns false if args is not email format.', () => {
    const testValue = '@yayoc.com';
    expect(isEmail(testValue)).toBeFalsy();
  });
});

describe('isURL', () => {
  it('returns true if args is URL format.', () => {
    const testValue = 'http://yayoc.com';
    expect(isURL(testValue)).toBeTruthy();
  });
  it('returns false if args is not URL format.', () => {
    const testValue = 'yayoc';
    expect(isURL(testValue)).toBeFalsy();
  });
});

