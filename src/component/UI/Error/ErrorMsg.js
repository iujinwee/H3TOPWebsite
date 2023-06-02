import React from 'react'
import { Button } from 'react-bootstrap'
import Form from '../Form/Form';

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
    <Form
        onCancel={()=>{props.acknowledge()}}
        header={<h1>Login Error!</h1>}
        content={<p>{message}</p>}
        footer={
            <Button className='border-slate-300 bg-indigo-900 mb-3'
                onClick={() => {props.acknowledge()}}>
                    OK
            </Button>}
    />
  )
}

export default ErrorMsg