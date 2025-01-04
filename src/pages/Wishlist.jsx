import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Wishlist = () => {
  return (
    <>
     <Header/>
     <div className='pt-20 px-5'>
      <>
        <h1 className='text-4xl text-red-600 mb-6'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow-2xl'>
          <img className='w-full h-50' src="https://cdn.pixabay.com/photo/2023/09/06/17/48/ai-generated-8237688_1280.png" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Product Name</h3>
            <div className=' flex justify-evenly mt-3'>
              <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
              <button className='text-xl'><i  class="fa-solid fa-cart-plus text-green-600"></i></button>
            </div>
            </div>

        </div>
      </div>
      </>
      
     
     </div>
    </>
  )
}

export default Wishlist