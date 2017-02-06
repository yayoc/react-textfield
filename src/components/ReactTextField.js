import React, { PropTypes } from 'react';
import './ReactTextField.css';

export default class ReactTextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      successMessage: null,

      errorMessage: null,

      isValid: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onChange(e) {
    if (!this.props.validateOnBlur) {
      const value = e.target.value;
      this.validate(value);
    }
    // Execute callback function.
    if (this.props.onChange) {
      this.props.onChange(this.state.isValid);
    }
  }

  onBlur(e) {
    const value = e.target.value;
    if (this.props.validateOnBlur) {
      this.validate(value);
    }

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  onFocus(e) {
    if (this.props.onFocus) {
      this.prop.onFocus(e);
    }
  }

  // TODO: Refactoring

  validate(value) {
    let errorMessage = null;
    let isValid = true;

    for (const err of this.props.validators) {
      if (!err.validator) {
        continue;
      }
      if (!err.validator(value)) {
        errorMessage = err.message;
        isValid = false;
        break;
      }
    }
    this.setState({ isValid, errorMessage });
  }

  render() {
    return (
      <div className="ReactTextField--container">
        <input
          type={this.props.type}
          className="ReactTextField--input"
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder={this.props.placeholder}
        />
        { this.state.isValid ?
          <span className="ReactTextField-message ReactTextField--success">
            {this.props.successMessage}
          </span>
          :
          <span className="ReactTextField-message ReactTextField--error">
            {this.state.errorMessage}
          </span>
        }
      </div>
    );
  }
}

ReactTextField.propTypes = {

  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'tel',
    'url',
  ]),

  placeholder: PropTypes.string,

  // Success message when validator passed.
  successMessage: PropTypes.string,

  // One of Error object includes validater and error message.
  validators: PropTypes.arrayOf(React.PropTypes.shape({
    message: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
  })),

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  validateOnBlur: PropTypes.bool,

};

ReactTextField.defaultProps = {
  type: 'text',
  placeholder: '',
  validators: [],
  validateOnBlur: false,
};

