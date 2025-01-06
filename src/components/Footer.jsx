import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'150px'}} className='bg-violet-600 w-full text-white p-4 '>
     <div className='flex justify-between p-4'>
      <div style={{width:'480px'}} className='mb-4'>
      <h5>
            <i class="fa-solid fa-truck-fast me-3"></i>
            E-Cart
            </h5>
            <p>Designed and built with all the love in the world by the Media team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
      </div>
      {/* Link */}
      <div style={{width:'480px'}} className='flex flex-col ms-5'>
       <h5 className='mb-4'>Links</h5>
       <Link to={'/'}>Landing Page</Link>
       <Link to={'/whishlist'}>Whishlist</Link>
       <Link to={'/cart'}>Cart</Link>
      </div>

      {/* Guides */}
      <div style={{width:'480px'}} className='flex flex-col'>
      <h5 className='mb-4'>Guides</h5>
       <a href='' >Tailwindcss</a>
       <a href=''>React</a>
       <a href='' >Redux</a>
       <a href='' >Router</a>
      </div>
      <div style={{width:'280px'}}>
        <h5 className='mb-4'>Contact Us</h5>
        <div className='flex gap-4 mb-4'>
          <input className='rounded h-8' type="text" placeholder='Enter Your Email' />
          <button className='bg-white text-violet-600 w-10 rounded'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='flex justify-between mt-5'>
          <a href=""><i class="fa-brands fa-github"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Footer