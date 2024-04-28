import React, { useEffect, useState } from 'react'
import { Card }  from './Card'
import { Animation } from '../Animation'



const Contact = () => {

  const [ data, setData] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect( ()  => {

    setLoading(true);

    fetch('https://reqres.in/api/users?delay=5')
    .then(res => res.json())
    .then(info => setData(info.data))
    .finally( () => setLoading(false));

  }, []);


  return (
    <div className='contact'>

    {
      loading
      ?
      <Animation></Animation>
      :
      data.map( (value) => {
        return(
          <Card key={value.id} rasm={value.avatar} ism={value.first_name} familiya={value.last_name}/>
        )
      })
    }

    </div>
  )
}

export default Contact