import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import rasm4 from './manzara.jpg'
import rasm5 from './mashina.jpg'
import rasm6 from './uy.jpg'

const tugma  = (event) => event.preventDefault();

const items = [
    
	<img className='h-96 mt-8 m-auto' src={rasm4} onDragStart={tugma} role="presentation" />,
	<img className='h-96 mt-8 m-auto' src={rasm5} onDragStart={tugma} role="presentation" />,
	<img className='h-96 mt-8 m-auto' src={rasm6} onDragStart={tugma} role="presentation" />,
];




const Portfolio = () => {
  return (
    <div className='bg-green-200'>
    <AliceCarousel
     mouseTracking 
     items={items}
     activeIndex={2}
     animationDuration={1000}
     />
    </div>
  )
}

export default Portfolio