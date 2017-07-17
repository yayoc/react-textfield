import React, { PropTypes } from 'react';
import './ReactTextField.css';

export default class ReactTextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      successMessage: null,

      errorMessage: null,

      isValid: false,

      value: props.defaultValue,
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    if (this.state.value !== null) {
      this.validate(this.state.value);
    }
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({ value });

    if (this.props.onChange) {
      this.props.onChange(e, this.props.name);
    }
    if (!this.props.validateOnBlur) {
      this.validate(value);
    }
  }

  onBlur(e) {
    const value = e.target.value;
    if (this.props.validateOnBlur) {
      this.validate(value);
    }

    if (this.props.onBlur) {
      this.props.onBlur(e, this.props.name);
    }
  }

  onFocus(e) {
    if (this.props.onFocus) {
      this.prop.onFocus(e, this.props.name);
    }
  }

  validate(value) {
    const errors = this.props.validators.filter((v) => {
      return v.validator && !v.validator(value);
    });

    const err = errors.length > 0 ? errors[0] : null;
    const newState = err
      ? { isValid: false, errorMessage: err.message }
      : { isValid: true, errorMessage: null };

    this.setState(newState, () => {
      if (this.props.afterValidate) {
        this.props.afterValidate(this.state.isValid, this.props.name);
      }
    });
  }

  render() {
    return (
      <div
        className="ReactTextField--container"
        style={this.props.style ? this.props.style.container : null}
      >
        <input
          name={this.props.name}
          type={this.props.type}
          value={this.state.value}
          className="ReactTextField--input"
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder={this.props.placeholder}
          style={this.props.style ? this.props.style.input : null}
        />
        { this.state.isValid ?
          <span
            className="ReactTextField-message ReactTextField--success"
            style={this.props.style ? this.props.style.successMessage : null}
          >
            {this.props.successMessage}
          </span>
          :
          <span
            className="ReactTextField-message ReactTextField--error"
            style={this.props.style ? this.props.style.errorMessage : null}
          >
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

  name: PropTypes.string.isRequired,

  defaultValue: PropTypes.string,

  placeholder: PropTypes.string,

  // Success message when validator passed.
  successMessage: PropTypes.string,

  // One of Error object includes validater and error message.
  validators: PropTypes.arrayOf(React.PropTypes.shape({
    message: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
  })),

  afterValidate: PropTypes.func,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  validateOnBlur: PropTypes.bool,

  style: PropTypes.shape({
    container: PropTypes.object,
    input: PropTypes.object,
    successMessage: PropTypes.object,
    errorMessage: PropTypes.object,
  }),

};

ReactTextField.defaultProps = {
  type: 'text',
  name: '',
  defaultValue: '',
  placeholder: '',
  validators: [],
  validateOnBlur: false,
  style: null,
};

