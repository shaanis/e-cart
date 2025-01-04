import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Header/>
    <div className='pt-20 container px-4 auto' >
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow-2xl'>
          <img className='w-full h-50' src="https://cdn.pixabay.com/photo/2023/09/06/17/48/ai-generated-8237688_1280.png" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Product Name</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-2 mt-3 text-white inline-block'>View More</Link>
            </div>

        </div>
      </div>

    </div>
    </>
  )
}

export default Home