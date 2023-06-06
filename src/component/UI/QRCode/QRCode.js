import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import { gameplay } from "../../../Content";
import Button from "../Button/Button";

const QRCode = (props) => {
  return (
      <div
        className="mx-auto -mt-8 text-center 
                sm:w-72 md:w-80 lg:w-96
                sm:px-8 md:px-9 lg:px-20
                sm:pb-8 md:pb-9 lg:pb-10 
                sm:pt-7 md:pt-8 lg:pt-9
                bg-slate-800 opacity-95
                border-2 border-black rounded-3xl
                text-white"
      >
        <div
          className="text-white lg:text-2xl md:text-3xl sm:text-lg text-center sm:px-4 lg:px-0
                    pb-4 font-semibold"
        >
          {gameplay.scanQR}
        </div>
        <div className="p-2 bg-white">
          <QRCodeCanvas
            id="qrCode"
            className="m-auto"
            value={props.url}
            size={200}
          />
        </div>
        <Button
          className="font-bold text-2xl text-white
                            bg-black rounded-3xl px-6 py-2 mt-4
                           border-2 border-black"
          onClick={props.onAcknowledge}
          message="OK"
        />
      </div>
  );
};

export default QRCode;
