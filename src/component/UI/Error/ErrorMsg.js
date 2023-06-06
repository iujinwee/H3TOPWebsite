import React from "react";
import { Button } from "react-bootstrap";
import Form from "../Form/Form";

const ErrorMsg = (props) => {
  let message = "";

  switch (props.message) {
    case "auth/invalid-email":
    case "auth/user-not-found":
      message = "Invalid User";
      break;

    case "auth/wrong-password":
      message = "Incorrect Password.";
      break;

    case "auth/internal-error":
      message = "Please Refresh your Browser.";
      break;

    case "auth/email-already-in-use":
      message = "Email is already registered.";
      break;

    default:
      message = props.message;
      break;
  }

  return (
    <Form
      onCancel={() => {
        props.acknowledge();
      }}
      header={<h1>Login Error!</h1>}
      content={<p>{message}</p>}
      footer={
        <Button
          className="border-slate-500 hover:border-slate-500
                bg-[rgb(63,22,32)] bg-opacity-70 
                hover:scale-110 hover:bg-[rgb(80,28,41)] hover:bg-opacity-90"
          onClick={() => {
            props.acknowledge();
          }}
        >
          OK
        </Button>
      }
    />
  );
};

export default ErrorMsg;
