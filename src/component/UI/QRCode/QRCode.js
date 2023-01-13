import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import Card from "../Card/Card";
import { gameplay } from "../../../Content";
import Button from "../Button/Button";

const QRCode = (props) => {

  return (
    <div className="justify-center flex m-auto">
      <Card className="z-30 fixed justify-center flex-col place-items-center my-0 py-5
                    bg-[rgb(61,9,68)] bg-opacity-90">
        <div
          className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-center 
                    pb-4 font-semibold"
        >
          {gameplay.scanQR}
        </div>
        <QRCodeCanvas
          id="qrCode"
          className="m-auto"
          value={props.url}
          size={250}
        />

        <Button className="font-bold text-2xl text-white
                            bg-black rounded-3xl px-6 py-2 mt-4
                           border-2 border-black" onClick={props.onAcknowledge} message="OK"/>
      </Card>
    </div>
  );
};

export default QRCode;
