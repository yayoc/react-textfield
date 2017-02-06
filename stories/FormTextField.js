import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormWrapper from '../examples/FormWrapper';
import TextFieldWrapper from '../examples/TextFieldWrapper';
import { usernameValidators, passwordValidators, emailValidators } from './validators';

storiesOf('FormTextField', module)
  .addWithInfo('Sign up', () => (
    <FormWrapper>
      <TextFieldWrapper
        label="Username"
        name="username"
        type="text"
        placeholder="username"
        validators={usernameValidators}
        successMessage="This Username is available."
      />
      <TextFieldWrapper
        label="Password"
        name="password"
        type="password"
        placeholder="password"
        validators={passwordValidators}
        successMessage="This Password is valid."
      />
      <TextFieldWrapper
        label="Email"
        name="email"
        type="email"
        placeholder="email"
        validators={emailValidators}
        successMessage="This Email is valid."
      />
    </FormWrapper>
  ))
  .addWithInfo('Sign in', () => (
    <FormWrapper>
      <TextFieldWrapper
        label="Username"
        name="username"
        type="text"
        placeholder="username"
        validators={usernameValidators}
        successMessage="This Username is available."
        validateOnBlur={true}
      />
      <TextFieldWrapper
        label="Password"
        name="password"
        type="password"
        placeholder="password"
        validators={passwordValidators}
        successMessage="This Password is valid."
      />
    </FormWrapper>
  ));

