import React from 'react';
import update from 'immutability-helper';
import ReactTextField from '../src/components/ReactTextField';

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    const fields = props.children.map((child) => {
      const name = child.props.name;
      const value = { name, isValid: false, value: null };
      return value;
    });
    const initialState = {
      fields,
    };
    this.state = initialState;
    this.canSubmit = this.canSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.afterValidate = this.afterValidate.bind(this);
  }

  afterValidate(isValid, name) {
    const index = this.state.fields.findIndex((field) => {
      return field.name === name;
    });
    if (index === -1) {
      return;
    }
    this.setState({
      fields: update(this.state.fields, { [index]: { isValid: { $set: isValid } } }),
    });
  }

  onChange(e, name) {
    const index = this.state.fields.findIndex((field) => {
      return field.name === name;
    });
    if (index === -1) {
      return;
    }
    this.setState({
      fields: update(this.state.fields, { [index]: { value: { $set: e.target.value } } }),
    });
  }

  onClick(e) {
    e.preventDefault();
    console.log(this.state.fields);
  }

  canSubmit() {
    return this.state.fields.every(f => f.isValid === true);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onChange: this.onChange,
        afterValidate: this.afterValidate,
      }),
    );

    return (
      <div>
        <form>
          {childrenWithProps}
          <button
            disabled={!this.canSubmit()}
            onClick={this.onClick}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

FormWrapper.propTypes = {
  children: React.PropTypes.node,
};

export default FormWrapper;
