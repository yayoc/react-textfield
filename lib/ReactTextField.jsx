import React, { PropTypes } from 'react';

export default class ReactTextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      typing: false,

      message: null,

      valid: false,
    };
  }

  onChange(e) {
    const value = e.target.value;
    this.validate(value);
    if (this.state.valid && this.props.successMessage) {
      this.setState({ message: this.props.successMessage });
    }
  }

  validate(value) {
    for (const err of this.props.errors) {
      if (!err.validator(value)) {
        this.setState({ message: err.message, valid: false });
        break;
      }
    }
    this.setState({ valid: true });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} />
        { this.state.message ?
          <span>
            {this.state.message}
          </span>
          :
            false
          }
      </div>
    );
  }
}

ReactTextField.propTypes = {

  // Success message when validator passed.
  successMessage: PropTypes.string,

  // One of Error object includes validater and error message.
  errors: PropTypes.array,

  // class

};
