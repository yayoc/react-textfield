import React from 'react';
import ReactTextField from '../src/components/ReactTextField';

function TextFieldWrapper(props) {
  return (
    <div>
      { props.label &&
        <label>{props.label}</label>
      }
      <ReactTextField
        {...props}
      />
    </div>
  );
}

TextFieldWrapper.propTypes = {
  label: React.PropTypes.string,
};


export default TextFieldWrapper;
