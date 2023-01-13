import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import AddTimeOptions from "./AddTimeOptions";
import QRCodeScanner from "../QRCode/QRCodeScanner";
import { doc, increment, updateDoc } from "firebase/firestore";
import { gameplay } from "../../../Content";
import { firestore } from "../../../firebase";

const AddTimer = (props) => {
  const [page, setPage] = useState("qrcode");
  const [scanData, setScanData] = useState("");
  
  const scanHandler = (data) => {
    // Store UID 
    setScanData(data);
    setPage("addtime");
  };
  
  const addHandler = (time) => {

    // Obtain document reference (docRef)
    const docRef = doc(firestore, "VisaTimer", scanData.text);

    if (!isNaN(time)) {
      // Add selected time to doc (docRef)
      updateDoc(docRef, {
        bonus_time: increment(time),
      });
    }
  };

  return (
    <>
      <Card
        className="flex flex-col text-center justify-center items-center pb-5
                  font-black bg-[rgb(73,15,69)] bg-opacity-60"
      >
        <span className="lg:text-5xl md:text-4xl sm:text-3xl">ADD VISA TIMER</span>

        {page === "qrcode" && (
          <span className="lg:text-2xl md:text-xl sm:text-base mt-3">
            {gameplay.adminQR}
          </span>
        )}

        {page === "qrcode" && <QRCodeScanner onScan={scanHandler} />}

        {page === "addtime" && (
          <AddTimeOptions
            onAdd={addHandler}
            onExit={() => {
              setPage("qrcode");
            }}
          />
        )}

        <Button
          id=""
          onClick={props.onCancel}
          className="h-14 w-32
                     bg-black text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
          message="Back"
        />
      </Card>
    </>
  );
};

export default AddTimer;
