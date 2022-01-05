import { Button } from '@mui/material';
import { default as React } from 'react';

export function CancelButton(props) {

  return (
    <React.Fragment>
      <Button
        className="cancelButton"
        variant="contained"
        onClick={props.onClick}
        style={{
          padding: '7px 24px 7px 24px',
          color: 'black',
          background: 'white',
          border: '1px solid black',
          textTransform: 'none',
          marginRight: '20px',
          boxShadow: '0px 0px 0px',
          ...props.style,
        }}
        disabled={props.disabled}
      >
        Annulla
      </Button>
    </React.Fragment>
  );
}

CancelButton.defaultProps = {
  disabled: false,
};
