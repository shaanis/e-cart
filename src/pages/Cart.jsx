import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/Slices/cartSlice'




const Cart = () => {
  const navigate = useNavigate()
  const [cartTotal,setCartTotal]= useState(0)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch= useDispatch()

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }
  },[userCart])

  const handleDrecement =(product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut=()=>{
    
    dispatch(emptyCart())
    alert("Order Confirmed!! thank you for purchasing with us")
    navigate('/')
  }
  return (
    <>
      <Header/>
      <div className='pt-20 ms-5 me-5 mb-5'>

      {
        userCart?.length>0?
       <>
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
                  {
                    userCart?.map((product,index)=>(
                      <tr>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img className='w-25 h-20' src={product.thumbnail} alt="" /></td>
                    <td>
                      <div className='flex'>
                        <button onClick={()=>handleDrecement(product)} className='font-bold mx-2'>-</button>
                        <input type="text" className='w-10 h-6  border p-1 roundedmx-2 text-center' value={product.quantity} readOnly/>
                        <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold mx-2'>+</button>
                      </div>
                    </td>
                    <td>${product.totalPrice}</td>
                    <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i class="fa-solid fa-trash"></i></button></td>
                  </tr>
                    ))
                  }
  
                </tbody>
              </table>
              <div className='float-right mt-5'>
                <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white '>Empty Cart</button>
                <Link to={'/'} className='bg-blue-500 ms-3 rounded text-white p-2'>Shop More</Link>
              </div>
            </div>
           <div className='col-span-1 h-100'>
             <div className='border rounded p-5 h-full'>
               <h2 className='text-2xl font-bold my-4 mt-8'>Total Amount : <span className='text-red-600'>${cartTotal}</span></h2>
               <hr />
               <button onClick={checkOut} className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
             </div>
           </div>
          </div>
       </>
       :
       <div className='flex flex-col items-center justify-center h-screen'>
      <img width={'300px'} src="https://bexcart.com/assets/images/empty-cart.gif" alt="" />
      <h2 className='text-red-600 text-2xl'>Your cart is Empty</h2>
    </div>}

        
      </div>
    </>
  )
}

export default Cart