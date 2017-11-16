import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import './textfields.css'

const defaultProps = {
  changeOnKeyDown: true
};

export default class TextFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.type || 'text';
    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onChange(this.state.value);
    }
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.changeOnKeyDown) {
      this.props.onChange(event.target.value);
    }
  }

  render() {
    const fieldType = this.props.fieldType || this.type;
    return (
      <FormGroup
        validationState={this.props.errorMessage ? 'error' : undefined}
      >
        { this.props.label ? <ControlLabel>{this.props.label}</ControlLabel> : null }
        <FormControl
          ref='input'
          value={this.state.value || ''}
          type={fieldType}
          placeholder={this.props.placeholder || this.props.passProps.placeholder}
          disabled={this.props.disabled}
          onChange={this.onChange.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
          onBlur={() => this.props.onChange(this.state.value)}
          componentClass={fieldType === 'textarea' ? 'textarea' : 'input'}
          {...this.props.passProps}
        />
        {this.props.errorMessage &&
          <HelpBlock>{this.props.errorMessage}</HelpBlock>
        }
      </FormGroup>
    );
  }
}

TextFieldComponent.defaultProps = defaultProps;

// textarea
class TextareaFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'textarea';
  }
}


// number
class NumberFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'number';
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onChange(parseInt(this.state.value));
    }
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.changeOnKeyDown) {
      this.props.onChange(parseInt(event.target.value));
    }
  }

}


// date
class DateFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'date';
  }
}

// email
class EmailFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'email';
  }
}

// password
class PasswordFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'password';
  }
}

// color
class ColorFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'color';
  }
}

export {
  TextFieldComponent as TextField,
  TextareaFieldComponent as TextareaField,
  NumberFieldComponent as NumberField,
  DateFieldComponent as DateField,
  EmailFieldComponent as EmailField,
  PasswordFieldComponent as PasswordField,
  ColorFieldComponent as ColorField
};