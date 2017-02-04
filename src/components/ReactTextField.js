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
  }

  onChange(e) {
    const value = e.target.value;
    this.validate(value);
    // Execute callback function.
    if (this.props.onChange) {
      this.props.onChange(this.state.isValid);
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
        <input type={this.props.type} className="ReactTextField--input" onChange={this.onChange} />
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

  // Success message when validator passed.
  successMessage: PropTypes.string,

  // One of Error object includes validater and error message.
  validators: PropTypes.arrayOf(React.PropTypes.shape({
    message: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
  })),

  onChange: React.PropTypes.func,

};

ReactTextField.defaultProps = {
  type: 'text',
  validators: [],
};

