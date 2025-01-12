import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/Slices/wishlistSlice'
import { addToCart } from '../redux/Slices/cartSlice'
const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

   const handleCart=(product)=>{
      dispatch(removeItem(product.id))
      dispatch(addToCart(product))
      const existingproduct = userCart?.find(item=>item.id == id)
      if(existingproduct){
        alert("Product Incrementing")
      }else{
        alert("Product added to cart!!!")
      }
    }

  return (
    <>
     <Header/>
     <div className='pt-20 px-5'>
     {
      userWishlist?.length >0 ?
      <>
      <h1 className='text-4xl text-red-600 mb-6'>My Wishlist</h1>
      <div className='grid grid-cols-4 gap-4'>
      {
        userWishlist?.map(product=>(
          <div className='rounded border p-2 shadow-2xl'>
        <img className='w-full h-50' src={product.thumbnail} alt="" />
        <div className='text-center'>
          <h3 className='text-xl font-bold'>{product.title}</h3>
          <div className=' flex justify-evenly mt-3'>
            <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
            <button onClick={()=>handleCart(product)} className='text-xl'><i  class="fa-solid fa-cart-plus text-green-600"></i></button>
          </div>
          </div>

      </div>
        ))
      }
    </div>
    </>
    : <div className='flex flex-col items-center justify-center h-screen'>
      <img width={'300px'} src="https://bexcart.com/assets/images/empty-cart.gif" alt="" />
      <h2 className='text-red-600 text-2xl'>Your wishlist is Empty</h2>
    </div>
     }
      
     
     </div>
    </>
  )
}

export default Wishlist