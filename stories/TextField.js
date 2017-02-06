import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextFieldWrapper from '../examples/TextFieldWrapper';
import { usernameValidators, passwordValidators, emailValidators, urlValidators } from './validators';


const style = {
  container: {
    textAlign: 'center',
  },
  input: {
    margin: '30px',
  },
  successMessage: {
    fontSize: '20px',
    color: '#3949AB',
  },
  errorMessage: {
    fontSize: '20px',
    color: '#E91E63',
  },
};

storiesOf('TextField', module)
  .addWithInfo('Text type', () => (
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
      label="Email"
      placeholder="Email"
      validators={emailValidators}
      successMessage="This Email is valid."
    />
  ))
  .addWithInfo('URL type', () => (
    <TextFieldWrapper
      type="url"
      label="URL"
      placeholder="URL"
      validators={urlValidators}
      successMessage="This URL is valid."
    />
  ))
  .addWithInfo('Validate on Blur', () => (
    <TextFieldWrapper
      label="Username"
      type="text"
      validators={usernameValidators}
      successMessage="This Username is available."
      validateOnBlur={true}
    />
  ))
  .addWithInfo('Override style', () => (
    <TextFieldWrapper
      label="Username"
      name="username"
      type="text"
      style={style}
      validators={usernameValidators}
      successMessage="This Username is available."
    />
  ));

