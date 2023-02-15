import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";
import "./Login.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      // redirect to welcome page
      navigate("/product");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, password } = data;

    if (email.trim() == "" || password.trim() == "") {
      setError("All fields are required");
    } else {
      // Send a data to api
      axios({
        method: "post",
        url: "/login",
        data: data,
      })
        .then((res) => {
          const response = res.data;
          if (response.status == 200) {
            localStorage.setItem("user", JSON.stringify(response.data));

            setSuccess(response.message);
            // redirect to welcome page
            navigate("/product");
          } else {
            setError(response.message);
          }
        })
        .catch((err) => {
          console.log("err ::::::", err);
        });
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
        <p id="mainheading"> Log in to Continue </p>
        <div className="innerDiv">
          <p className="size">Login</p>
          <div className="inputdiv">
            <input
              onChange={(e) => handleInputValue(e)}
              value={data.email}
              className="In"
              type="text"
              placeholder="Enter your Email"
              name="email"
            />
            <input
              onChange={(e) => handleInputValue(e)}
              value={data.password}
              className="In"
              type="password"
              placeholder="Entre your Password"
              name="password"
            />
            {error && <p className="text-center text-danger">{error}</p>}
            {success && <p className="text-center text-success">{success}</p>}
            <button className="btn-customize" onClick={(e) => handleSubmit(e)}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
