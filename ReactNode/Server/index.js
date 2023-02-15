import express from "express";
import Connection from "./DataBase/Db.js";
import DefaultData from "./DataBase/DefaultData.js";
import UserModel from "./DataBase/model/user.js";
import ProductModel from "./DataBase/model/productSchema.js";
import cartCollection from "./DataBase/model/Cart.js";
// import dotenv from "dotenv"
import bodyParser from "body-parser"

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Connection();

app.post("/login", async (req, res) => {
  try {
    console.log("req.body ::::::", req.body);
    const { email, password } = req.body;

    const userData = await UserModel.findOne({ email, password });
    if (userData) {
      res.json({ status: 200, message: "Login successfully", data: userData });
    } else {
      res.json({ status: 400, message: "Incorrect password" });
    }
  } catch (err) {
    console.log("error ::::::::::", err);
  }
});

app.post("/register", async (req, res) => {
  try {
    console.log("req.body ::::::", req.body);
    const { name, email, password } = req.body;

    const userData = await UserModel.findOne({ email: email });

    console.log("userData :::::::::::::::::::::", userData);
    if (userData) {
      return res.json({ status: 400, message: "User is already registered" });
    } else {
      const RegisterEmployee = new UserModel({
        name: name,
        email: email,
        password: password,
      });
      const registerd = await RegisterEmployee.save();
    }

    return res.json({ status: 200, message: "User register successfully" });
  } catch (err) {
    console.log("some error is throw");
  }
});

app.get("/products", async (req, res) => {
  try {
    console.log("req :::::::::", req.query);
    console.log("params :::::::::", req.params);
    const data = await ProductModel.find({});
    return res.status(200).json(data);
  } catch (err) {
    console.log("err ::::::::::::::", err);
    res.status(500).json({ message
      : err.message });
  }
});
app.get("/cart/:user_id", async (req, res) => {
  try {
    console.log(':::::::::::::::::: cart ::::::::::::::::::',)
    console.log("params :::::::::", req.params);
    const data = await cartCollection.find({user_id: req.params.user_id});
    console.log(" cart data :::::::::", data);

    return res.status(200).json(data);
  } catch (err) {
    console.log("err ::::::::::::::", err);
    res.status(500).json({ message: err.message });
  }
});

app.post("/cart", async (req, res) => {
  const { user_id, product_id, qty, name, price , decription} = req.body;
  try {
    console.log("req.body ::::::::: cart ::::::::::::::", req.body);
    const checkSchema = await cartCollection.findOne({
      user_id,
      product_id,
    });
    console.log(':::::::: If :::::::::', checkSchema)

    if(checkSchema) {
      console.log(':::::::: If :::::::::', checkSchema)

      const quantity = parseInt(checkSchema.quantity) + parseInt(qty)
      const productPrice =  parseInt(checkSchema.price) + parseInt(price)

      await cartCollection.updateOne({ user_id, product_id }, {
        quantity,
        price: productPrice,
        name,
        decription
      })
    }else {
      console.log(':::::::: Else :::::::::')

      const addToCart = new cartCollection({
        name,
        decription,
        product_id,
        user_id,
        quantity: qty,
        price
      }) 
      await addToCart.save()
    }

    res.json({ status: 200, message: "Add to cart successfully"})
  } catch (err) {
    console.log('Err :::::::::::::::::', err)
    res.json({ status: 500, message: 'Internal server error'})
  }
});

app.listen("8000", () => {
  console.log("server is created successfuly");
});


