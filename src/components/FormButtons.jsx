import { default as React } from 'react';
import { CancelButton } from './CancelButton';
import { SubmitButton } from './SubmitButton';

export function FormButtons(props) {
  return (
    <React.Fragment>
      <div style={props.style}>
        <CancelButton
          onClick={props.handleCancel}
          title={props.cancelTitle}
          disabled={props.cancelDisabled}
        />
        <SubmitButton
          disabled={!props.isValid}
          handleSubmit={props.handleSubmit}
          title={props.submitTitle}
        />
      </div>
    </React.Fragment>
  );
}

FormButtons.defaultProps = {
  style: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '12px 0 10px 0',
  },
  cancelDisabled: false,
};
