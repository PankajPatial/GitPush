import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function isEmail(email) {
    var regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const { name, email, password, confirmPassword } = data;

    if (
      name.trim() == "" ||
      email.trim() == "" ||
      password.trim() == "" ||
      confirmPassword.trim() == ""
    ) {
      setError("All fields are required");
    } else if (password != confirmPassword) {
      setError("Password & Confirm password is not matched");
    } else {
      if (isEmail(email)) {
        // Send a data to api
        axios({
          method: "post",
          url: "/register",
          data: data,
        })
          .then((res) => {
            const response = res.data;
            console.log("response :::::::::", response);
            if (response.status == 400) {
              setError(response.message);
            } else {
              setSuccess(response.message);
            }
          })
          .catch((err) => {
            console.log("err ::::::", err);
          });
      } else {
        setError("Please enter valid email");
      }
    }
  };
  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <div className="main">
        <p id="mainheading"> </p>
        <div className="innerDiv">
          <p className="size">Sign Up</p>
          <div className="inputdiv">
            <input
              onChange={(e) => handleInputValue(e)}
              value={data.name}
              className="In"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              onChange={(e) => handleInputValue(e)}
              value={data.email}
              className="In"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              onChange={(e) => handleInputValue(e)}
              value={data.password}
              className="In"
              type="Password"
              placeholder="Password"
              name="password"
            />
            <input
              onChange={(e) => handleInputValue(e)}
              value={data.confirmPassword}
              className="In"
              type="Password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            {error && <p className="text-center text-danger">{error}</p>}
            {success && <p className="text-center text-success">{success}</p>}
            <button className="btn-customize" onClick={(e) => handleSubmit(e)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
