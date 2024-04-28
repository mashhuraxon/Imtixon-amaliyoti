import React from 'react';
import { Link } from 'react-router-dom';


import rasm1 from './Group.png';
import rasm2 from './gul.png'

const Navbar = () => {
  return (
    <div className='bg-green-200 flex justify-between py-5 px-5'>
        <img className='h-48' src={rasm1}/>
        <img className='h-8 -ml-96 mt-5 ' src={rasm2} />
        <h2 className='mr-96 text-black font-bold text-xl mt-5'>Hobby</h2>


        <ul className='flex gap-10'>
            <li className='text-xl text-black font-bold '><Link to='home'>Home</Link></li>
            <li className='text-xl text-black font-bold '><Link to='about'>About</Link></li>
            <li className='text-xl text-black font-bold '><Link to='portfolio'>Portfolio</Link></li>
            <li className='text-xl text-black font-bold '><Link to='contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar