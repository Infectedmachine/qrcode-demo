import React, { useRef, useState } from 'react';
import QrReader from 'react-qr-reader';

export function QrCodeReader(props) {
  const qrRef = useRef(null);
  const [legacy, setLegacy] = useState(false);
  const [fromPicture, setFromPicture] = useState(false);

  const UploadButton = () => {
    return (
      <button
        type="button"
        onClick={() => {
          if (legacy && qrRef?.current) qrRef?.current.openImageDialog();
        }}
      >
        Upload
      </button>
    );
  };

  const PictureCheckbox = () => {
    return (
      <div>
        <input
          type="checkbox"
          defaultChecked={fromPicture}
          onChange={(event) => {
            setLegacy(event.target.checked);
            setFromPicture(event.target.checked);
          }}
        />
        <span>Get from picture</span>
      </div>
    );
  };

  return (
    <>
      <QrReader
        delay={300}
        ref={qrRef}
        onError={props.onError}
        onScan={props.onScan}
        style={props.style}
        legacyMode={legacy}
      />
      {props.enableLoadFromPicture ? (
        <>
          <PictureCheckbox />
          {legacy ? <UploadButton /> : null}
        </>
      ) : null}
    </>
  );
}

QrCodeReader.defaultProps = {
  style: undefined,
};
