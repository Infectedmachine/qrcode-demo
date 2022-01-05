import { Button } from '@mui/material';
import { default as React } from 'react';

export function SubmitButton(props) {

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={props.handleSubmit}
        style={{ textTransform: 'none', padding: '7px 24px 7px 24px' }}
        disabled={props.disabled}
      >
        Salva
      </Button>
    </React.Fragment>
  );
}
