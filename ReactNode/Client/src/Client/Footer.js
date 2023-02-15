import React from 'react'
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='bg-dark text white pt-5 pb-4'>
        <div className='container text-center text-md-left'>
        <div className='row text-center text-md-left'>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt -3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>e-commerce</h5>
                <p className=' text-white'>E-commerce is revolutionizing the way we all shop in India. 
                Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click?

                 Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories.

                   </p>
            </div>
            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-4'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>About</h5>
                  <p className=' text-white'>
                  {/* <ol>
                  <li></li>
                  <li></li>
                  <li>Careers</li>
                  <li>e-Stories</li>
                  </ol> */}

                 <Link to='#'className='text-white'>Contect-Us</Link> 
                </p> 
                 <p className='text-white'> 
                 <Link to='#'className='text-white'>About-Us</Link>
                </p>
                <p className=' text-white'>
                 <Link to='#'className='text-white'>About-Us</Link>
                </p>
                <p>
                 <Link to='#'className='text-white'>Careers</Link>
                </p>
            </div>
            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful Links</h5>
            <p>
                 <Link to='#'className='text-white'>Your Account</Link>
                </p>
            <p>
                 <Link to='#'className='text-white'>Become an Affilliates</Link>
                </p>
            <p>
                 <Link to='#'className='text-white'>Shipping Rates</Link>
                </p>
            <p>
                 <Link to='#'className='text-white'>Help</Link>
                </p>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Content</h5>
            <p>
                 <Link to='#'className='text-white'>+9198554786</Link>
                </p>
            <p>
                 <Link to='#'className='text-white'>+006159694</Link>
                </p>
            <p>
                 <Link to='#'className='text-white'>@ShopingAdd.com</Link>
                </p>
            <p>
                 <Link to='#'className='text-white'>E-commerce.facebook</Link>
                </p> 
            </div>
        </div>
            
        </div>
        
    </footer>
      
    </>
  )
}

export default Footer