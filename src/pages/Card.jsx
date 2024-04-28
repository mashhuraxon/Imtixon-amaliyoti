import React from 'react'

export const Card = (props) => {
  return (
    <div className='card bg-white'>
        <img src={props.rasm} />
        <h2 className='text' >{props.ism}</h2>
        <h3 className='text' >{props.familiya}</h3>
        <h4 className='text' >{props.email}</h4>
    </div>
  )
}
