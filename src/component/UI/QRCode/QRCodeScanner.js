import React from "react";
import QrReader from "react-qr-scanner";

const QRCodeScanner = (props) => {
  const errorHandler = (err) => {
    alert(err);
  };

  const scanHandler = (data) => {
    if (data !== null) {
      props.onScan(data);
    }
  };

  return (
    <div className="flex flex-auto justify-center my-4">
      <QrReader
        delay={100}
        className="h-60 w-80"
        onError={errorHandler}
        onScan={scanHandler}
      />
    </div>
  );
};

export default QRCodeScanner;
