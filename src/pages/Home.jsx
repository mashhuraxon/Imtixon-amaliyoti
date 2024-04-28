import React from 'react'
import rasm3 from './qiz.png'

const Home = () => {
  return (
    <div className='bg-green-200 pb-56'>
    <h1 className='text-5xl font-bold text-black w-96 ml-72 pt-10' >Make a <font className="text-green-700"> Beautiful Garden</font> <span className='w-5'> with </span></h1>
    <h3 className='text-5xl font-bold text-black ml-72 pb-10'>Your own Hand</h3>
    <img className='w-80 ml-auto mr-96 -mt-72' src={rasm3}/>
        
    </div>
  )
}

export default Home