import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { open, setOpen } from "./cart.js/Cart";
import "../Client/Login.css";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [state, setState] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [localStorage.getItem("user")]);

  const HandleClose = () => {
    localStorage.removeItem("user");
    navigate("/");
    setUser(null);
  };

  console.log("user ::::::::::::: navbar", user);

  //cart api call
  useEffect(() => {
    if (state == null && user) {
      Addcart();
    }
  }, [user]);
  
  const Addcart = async () => {
    console.log("state ::::::::::::", state);
    if (user) {
      console.log("user ::::::::::::", user);
      axios({
        method: "get",
        url: `/cart/${user._id}`,
        headers: {
          "Content-Type": "application/json",
        },
        // data: JSON.stringify({
          //   user_id: user.id
          // }),
        })
        .then(function (res) {
          console.log("res.data::::::::::::::::::::", res.data);
          setData(res.data);

        })
        .catch(function (error) {
          console.log(" error :::::::::::", error);
          console.log(error);
        });
      }
    };
    
  const OpenBox = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar navbar-nav bg-info ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"#"}>
            E-commerce_Shoping
          </Link>
          <div className="navul">
            {user ? (
              <>
                <p className="text-secondary">{user.name}</p>
                <button
                  className="btn  btn-outline-warning tag"
                  onClick={() => HandleClose()}
                >
                  Logout
                </button>
                <button
                  className="btn btn-outline-warning tag"
                  onClick={() => OpenBox()}
                >
                  Cart
                </button>
                <div className={`cart-main ${open ? "show" : "hide"}`}>
                  <div className="cartDiv">
                    {data
                      ? data.length > 0
                        ? data.map((cur, id) => {
                          console.log('checkcodition::::::::::::::::' ,cur)
                            return (
                              <div>
                                <p>Product_id{cur.user_id}</p>
                                <p>name of prodcut{cur.name}</p>
                                <p>quantity{cur.quantity}</p> 
                                <p className="text-danger"> Total cost{cur.price}</p> 
                                <hr></hr> 
                              </div>  
                            )
                          })
                             :"loading..........."
                            : "NO data found"
                      }
                      </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/" className="tag">
                  Login
                </Link>
                <Link to="/signup" className="tag">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
