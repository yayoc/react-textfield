import React from 'react';
import moment from 'moment';
import { storiesOf } from '@kadira/storybook';
import TextFieldWrapper from '../examples/TextFieldWrapper';
import { usernameValidators, passwordValidators } from './validators';


storiesOf('TextField', module)
  .addWithInfo('default', () => (
    <TextFieldWrapper
      label="Username"
      placeholder="username"
      validators={usernameValidators}
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
      validators={usernameValidators}
      successMessage="This Username is available."
      validateOnBlur={true}
    />
  ));

