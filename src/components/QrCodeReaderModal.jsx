import { Box, Dialog } from '@mui/material';
import React from 'react';
import { CancelButton } from './CancelButton';
import { QrCodeReader } from './QrCodeReader';

export function QrCodeReaderModal(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const dialogStyle = {
    borderRadius: 16,
    width: '690px',
    height: '578px',
    paddingInline: '63px',
    paddingBottom: '36px',
    paddingTop: '36px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const qrContainerStyle = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '26px',
    fontFamily: 'JekoBlack',
    paddingBottom: '8px',
    borderBottom: '1px solid #E6E6E6',
    textAlign: 'center',
    fontWeight: 900,
  };

  return (
    <Dialog
      maxWidth="sm"
      PaperProps={{
        style: dialogStyle,
      }}
      fullWidth
      open={props.open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box style={containerStyle}>
        <Box style={titleStyle}>{props.title}</Box>
        <Box style={qrContainerStyle}>
          <QrCodeReader
            style={{
              width: '450px',
            }}
            enableLoadFromPicture={false}
            onError={() => {}}
            onScan={props.onScan}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <CancelButton
            onClick={handleClose}
            style={{ marginRight: '0px' }}
          />
        </Box>
      </Box>
    </Dialog>
  );
}
