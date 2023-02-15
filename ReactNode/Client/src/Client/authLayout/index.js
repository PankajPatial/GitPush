import React from 'react'
import Navbar from "../Navbar"
import Footer from '../Footer'

export default function AuthLayout({ children }) {
 const FindUser= localStorage.getItem("user")

  return (
        <>
            <Navbar />
            {children}
            
            {
              FindUser && 
              <Footer/>

            }
        </>
  )
}
