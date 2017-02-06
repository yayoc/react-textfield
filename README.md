# react-textfield <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> Elegant textfield of React Component.

## Live Playground

For examples of the datepicker in action, go to http://blog.yayoc.com/react-textfield.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Getting Started
#### Install dependencies
Ensure packages are installed with correct version numbers by running:
```sh
(
  export PKG=react-textfield;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```

Which produces and runs a command like:

```sh
npm install --save react-textfield
```

#### Include component
```js
import { TextField } from 'react-textfield';
```

#### Include CSS
Write later.

#### Make some elegant textfield
```jsx
<TextField
  name="username"
  type="text"
  placeholder="username"
  validators={defaultValidators}
  successMessage="This Username is available."
/>
```

## API

We have one component and validators for all of your textfield needs.

### `ReactTextField`

This `controlled components` is designed to make input textfield with some messages easily.   
We will make accessible and convenient form for end-users by showing appropriate success or error messages.  

#### `props`

**Type:**
This props will pass as a type attribute of Input tag.  

```js
type: PropTypes.oneOf([
  'text',
  'password',
  'email',
  'tel',
  'url',
])
```

**Name:**
This props will pass as a name attribute of Input tag.  
If you are using multiple components, This props must be unique.

**Validators:**
This props is array of validator object which contains both error message and handler as properties.  
Args of the handler is string value ( text field value ), Return value is boolean type.  
You can set validator from utilities, or register custom validator by yourself.  
Indeed, it is possible to confirm validator methods provided here.  
About using custom validater, please check example.

```js
// One of Error object includes validater and error message.
validators: PropTypes.arrayOf(React.PropTypes.shape({
  message: PropTypes.string.isRequired,
  validator: PropTypes.func.isRequired,
})),
```

**Placehodler:**
This props will pass as placeholder attribute of Input tag.

**successMessage:**
The success message will appear when validation is passed.  
Unless you set this props, success message will not appear.

**afterValidate:**
A handler will execute after validating.  
First args is `isValid`(boolean type), second args is `name` (string type).

**onChange:**
A event handler of input text filed. In addition to original args, Name will pass as second args.

**onBlur:**
A event handler of input text filed.

**onFocus:**
A event handler of input text filed.

**ValidateOnBlur:**
Default value is false. When embedding true, validating will be occurred onBlur event only.

### Validators

**length:**
Validate the length of value. The second args { min: integer, max: integer }.

**isAlphanumeric:**
Validate whether alphanumeric or not.

**mustContainUpperCase:**
Validate whether value contains upper case at least one.

**isEmail:**
Validate whether value is formatted of Email address.

**isUrl:**
Validate whether value is formatted of Email address.

### Examples

```js
render() {
  const usernameValidators = [
    {
      message: 'Username must be 4 - 12 characters',
      validator: value => length(value, { min: 4, max: 12 }),
    },
    {
      message: 'Username must be alphanumeric.',
      validator: value => isAlphanumeric(value),
    },
  ];

  <TextField
    name="username"
    placeholder="username"
    validators={usernameValidators}
    successMessage="This Username is available."
  />
}

```

### Style




