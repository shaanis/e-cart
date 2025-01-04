import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Header/>
      <div className='pt-20 ms-5 me-5 mb-5'>
        <h1 className=' text-4xl font-bold text-blue-600'>Cart Summary</h1>
        <div className='grid grid-cols-3 mt-5 gap-5'>
          <div className='col-span-2 gap-4 border p-5 shadow'>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <td className='font-semibold'>#</td>
                  <td className='font-semibold'>Name</td>
                  <td className='font-semibold'>Image</td>
                  <td className='font-semibold'>Quantity</td>
                  <td className='font-semibold'>Price</td>
                  <td className='font-semibold'>...</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Product Name</td>
                  <td><img className='w-25 h-20' src="https://cdn.pixabay.com/photo/2023/09/06/17/48/ai-generated-8237688_1280.png" alt="" /></td>
                  <td>
                    <div className='flex'>
                      <button className='font-bold mx-2'>-</button>
                      <input type="text" className='w-10 h-6  border p-1 roundedmx-2 text-center' value={100} readOnly/>
                      <button className='font-bold mx-2'>+</button>
                    </div>
                  </td>
                  <td>$999</td>
                  <td><button className='text-red-600'><i class="fa-solid fa-trash"></i></button></td>
                </tr>

              </tbody>
            </table>
            <div className='float-right mt-5'>
              <button className='bg-red-600 rounded p-2 text-white '>Empty Cart</button>
              <Link to={'/'} className='bg-blue-500 ms-3 rounded text-white p-2'>Shop More</Link>
            </div>
          </div>
         <div className='col-span-1 h-100'>
           <div className='border rounded p-5 h-full'>
             <h2 className='text-2xl font-bold my-4 mt-8'>Total Amount : <span className='text-red-600'>$999</span></h2>
             <hr />
             <button className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
           </div>
         </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Cart