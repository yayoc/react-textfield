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
* * `npm install`
* * `npm run storybook`
* * Visit http://localhost:9001/
*

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
<TextFieldWrapper
  label="Username"
  validators={defaultValidators}
  successMessage="This Username is available."
/>
```
