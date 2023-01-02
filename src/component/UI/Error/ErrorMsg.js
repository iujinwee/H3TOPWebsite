import React from 'react'
import { Button } from 'react-bootstrap'
import Card from '../Card/Card'

const ErrorMsg = (props) => {

    let message = "";

    switch (props.message) {
        case "auth/invalid-email":
        case "auth/user-not-found": 
            message = "Invalid User"
            break;
        
        case "auth/wrong-password": 
            message = "Incorrect Password."
            break; 

        case "auth/internal-error":
            message = "Please Refresh your Browser."
            break;
        
        case "auth/email-already-in-use":
            message = "Email is already registered."
            break;

        default:
            message = props.message
            break;
    }

  return (
    <div className='fixed z-50 flex justify-center items-center 
                    w-screen mt-20'>
        <div className=''>
        <Card className="bg-black opacity-100">
            <div className='text-center m-auto'>
                <div className='pb-3'>
                    {message}
                </div>
                <Button onClick={() => {props.acknowledge()}}>
                    OK
                </Button>
            </div>
        </Card>
        </div>
    </div>
  )
}

export default ErrorMsg