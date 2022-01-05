import { TextField } from '@mui/material';
import React from 'react';

function TextFormField(props) {

  return (
    <TextField
      fullWidth={props.fullWidth}
      margin="dense"
      disabled={props.disabled}
      helperText={props.errorText || ''}
      error={props.error}
      label={props.label}
      id={props.id}
      name={props.id}
      variant="outlined"
      style={props.style}
      InputProps={{
        name: props.id,
        type: props.type,
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        endAdornment: props.endAdornment,
        value: props.value,
        readOnly: props.readOnly,
      }}
    />
  );
}

TextFormField.defaultProps = {
  style: undefined,
  value: '',
  endAdornment: undefined,
  disabled: false,
  readOnly: false,
};

export default TextFormField;
