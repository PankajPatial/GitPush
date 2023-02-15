import React from "react";
import LoginForm from "./Client/LoginForm";
import SignUp from "./Client/SignUp";
import AuthLayout from "./Client/authLayout";
import Products from "./Client/Products";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Client/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthLayout>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product" element={<Products />} />
            <Route path="/Footer" element={<Footer/>} />
          </Routes>
        </AuthLayout>
      </BrowserRouter>
      {/* <Navbar/> */}

      {/* routes */}
      {/* <LoginForm/>  */}
      {/* <SignUp/> */}
      {/* End routes */}
      {/* <Products/> */}
    </>
  );
};

export default App;
