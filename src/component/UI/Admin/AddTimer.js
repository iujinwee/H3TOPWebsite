import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import AddTimeOptions from "./AddTimeOptions";
import QRCode from "./QRCode";

const AddTimer = (props) => {
  const [page, setPage] = useState("qrcode");

  const scanHandler = (data) => {
    setPage("addtime");
    console.log(data);
  }

  const addHandler = (time) => {
    if(!isNaN(time)){
      // Add time to doc 
    }
  }

  return (
    <>
      <Card
        className="flex flex-col text-center justify-center items-center pb-5
                  font-black"
      >
        <span className="text-5xl">ADD VISA TIMER</span>
        
        {page === "qrcode" && <span className="text-2xl mt-3">Scan QR Code to Add Time to their Visa</span>}

        {page === "qrcode" && <QRCode onScan={scanHandler}/>}

        {page === "addtime" && <AddTimeOptions onAdd={addHandler} onExit={()=>{setPage("qrcode")}}/>}

      <Button
            id=""
            onClick={props.onCancel}
            className="h-14 w-32
                     bg-black text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="Back"/>
      </Card>

    </>
  );
};

export default AddTimer;
