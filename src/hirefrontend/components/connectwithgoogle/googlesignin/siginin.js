import React from "react";
import { authentication } from "./config";
import { Button } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        className="button"
        size="lg"
        onClick={signInWithGoogle}
        style={{ margin: "10px" }}
      >
        Login with Google
      </Button>
    </div>
  );
}
