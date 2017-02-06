import React from 'react';
import moment from 'moment';
import { storiesOf } from '@kadira/storybook';
import TextFieldWrapper from '../examples/TextFieldWrapper';
import { length, isAlphanumeric, mustContainUpperCase } from '../src/utils/validator';

const defaultValidators = [
  {
    message: 'Username must be 4 - 12 characters',
    validator: value => length(value, { min: 4, max: 12 }),
  },
  {
    message: 'Username must be alphanumeric.',
    validator: value => isAlphanumeric(value),
  },
];

const passwordValidators = [
  {
    message: 'Password must be at least 8 characters long',
    validator: value => length(value, { min: 8, max: null }),
  },
  {
    message: 'Password must be alphanumeric.',
    validator: value => isAlphanumeric(value),
  },
  {
    message: 'Password must contain at least one upper case letter',
    validator: value => mustContainUpperCase(value),
  },
];


storiesOf('TextField', module)
  .addWithInfo('default', () => (
    <TextFieldWrapper
      label="Username"
      placeholder="username"
      validators={defaultValidators}
      successMessage="This Username is available."
    />
  ))
  .addWithInfo('Password type', () => (
    <TextFieldWrapper
      type="password"
      label="Password"
      placeholder="password"
      validators={passwordValidators}
      successMessage="This Password is valid."
    />
  ))
  .addWithInfo('Email type', () => (
    <TextFieldWrapper
      type="email"
    />
  ))
  .addWithInfo('Tel type', () => (
    <TextFieldWrapper
      type="tel"
    />
  ))
  .addWithInfo('url type', () => (
    <TextFieldWrapper
      type="url"
    />
  ))
  .addWithInfo('validate on Blur', () => (
    <TextFieldWrapper
      type="text"
      validators={defaultValidators}
      successMessage="This Username is available."
      validateOnBlur={true}
    />
  ));

