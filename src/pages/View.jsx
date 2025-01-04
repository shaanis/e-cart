import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header/>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://cdn.pixabay.com/photo/2023/09/06/17/48/ai-generated-8237688_1280.png" alt="" />
          <div>
            <h3 className='font-bold'>PID : id</h3>
            <h1 className='font-bold text-5xl'>Product Name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$999</h4>
            <h4>Category : category</h4>
            <p>
              <span className='font-bold'>Description</span>: 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempora quis veritatis fuga assumenda rerum pariatur. Qui, suscipit tempora? Doloremque dicta tempore tempora optio accusantium dolores suscipit odit sapiente nesciunt!
              
            </p>
            <div className='flex  justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2 rounded-md shadow-2xl'>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2 rounded-md shadow-2xl'>Add to Cart</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default View