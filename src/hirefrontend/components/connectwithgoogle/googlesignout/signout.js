import React from "react";
import { Button } from "react-bootstrap";
import { authentication } from "../googlesignin/config";
import { getAuth, signOut } from "firebase/auth";

export default function signout() {
  const Logout = () => {
    signOut(authentication)
      .then(() => {
        console.log("Sigout success");
      })
      .catch((error) => {
        console.log("Error Occured");
      });
  };

  return (
    <div>
      <Button type="btn" size="lg" onClick={Logout} style={{ margin: "10px" }}>
        {" "}
        Logout{" "}
      </Button>
    </div>
  );
}
