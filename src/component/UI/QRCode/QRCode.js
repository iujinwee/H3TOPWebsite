import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import { gameplay } from "../../../Content";
import Button from "../Button/Button";

const QRCode = (props) => {

  return (
    <div className="justify-center flex mx-auto">
      <div className=" m-auto text-center 
                sm:w-72 md:w-80 lg:w-96
                sm:px-8 md:px-9 lg:px-10 
                sm:pb-8 md:pb-9 lg:pb-10 
                sm:pt-7 md:pt-8 lg:pt-9
                bg-slate-800 opacity-95
                border-2 border-black rounded-3xl
                text-white">
        <div
          className="text-white lg:text-2xl md:text-3xl sm:text-2xl text-center 
                    pb-4 font-semibold"
        >
          {gameplay.scanQR}
        </div>
        <QRCodeCanvas
          id="qrCode"
          className="m-auto"
          value={props.url}
          size={200}
        />

        <Button className="font-bold text-2xl text-white
                            bg-black rounded-3xl px-6 py-2 mt-4
                           border-2 border-black" onClick={props.onAcknowledge} message="OK"/>
      </div>
    </div>
  );
};

export default QRCode;
