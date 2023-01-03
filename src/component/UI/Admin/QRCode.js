import React, { useState } from 'react'
import QRreader from 'react-qr-scanner';

const QRCode = (props) => {

    const [result, setResult] = useState('No Result');

    const errorHandler = (err) => {
        console.log(err)
    }

    const scanHandler = (data) => { 
        if(data!==null){
            setResult(data);
            props.onScan(result);
        }
    }

  return (
    <div className='flex flex-auto justify-center my-4'>
        <QRreader
            delay={100}
            className="h-60 w-80"
            onError={errorHandler}
            onScan={scanHandler}
        />
    </div>
  )
}

export default QRCode