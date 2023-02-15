import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Cart = () => {
  const [state, setState] = useState("");
  const [open, setOpen] = useState("false");

  useEffect(() => {
    Addcart();
  }, []);

  const Addcart = async () => {
    axios
      .get("/cart")
      .then((res) => {
        setState(res.data);
        console.log("Message::::::",res.data)
      })
      .catch((err) => {
        console.log("Message::::::::", err);
      });
  };

  return (
    <>
      <div>
        <div>hello </div>
        <div>from</div>
        <div>this</div>
        <div>side</div>
      </div>
    </>
  );
};

export default Cart;
