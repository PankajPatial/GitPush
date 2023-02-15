import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

const Products = () => {
  const [Product, setProduct] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    getProducts();
    setSuccess('')
    setError(' ')
  }, []);

  const getProducts = async () => {
    const call = await axios
      .get("/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buyProduct=(data)=>{
    const { _id, price, title, decription } = data
    setSuccess('')
    setError(' ')

    console.log('price :::::::::::::::::::::::', price)
    console.log('title :::::::::::::::::::::::', title)
    console.log('user :::::::::::::::::::::::', user)
    if(user){
      axios({
        method: "post",
        url: "/cart",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          user_id: user._id, 
          product_id: _id,
          qty: 1,
          name: title.longTitle, 
          price: price.cost,
          decription
        }
      })
        .then(function (res) {
          console.log("res.data :::::::::::::::", res.data);
          setSuccess('Add to cart successful')

        })
        setError("Please login yourself first")
        .catch(function (error) {
          console.log(' error :::::::::::', error)
          console.log(error);
        });
    }else{
    }
  };
  return (
    <>
      <div className="container" style={{"margin":"auto"}}>
        <div className="row">
        {error && <p className="text-white alert-danger">{error}</p>}
        {success && <p className="text-dark alert-success">{success}</p>}
          {Product && Product !== null ? (
            Product.length > 0 ? (
              Product.map((cur, idx) => {
                console.log('ProductContainerData::::::::::::::::::::',cur);
                return (
                  <div className="col-lg-3 bg-light">
                    <div className="card" style={{ width: "18rem", "height":"500px"}}>
                      <img src={cur.url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{cur.title.shortTitle}</h5>
                        <p className="card-text">{cur.price.cost}</p>
                        <button className="btn btn-warning" onClick={()=>{buyProduct(cur)}}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No data found</p>
            )
          ) : (
            <p>Loading.....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
