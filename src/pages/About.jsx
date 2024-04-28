import React, { useState } from 'react'
import talabalar from '../Data'

const About = () => {

    const [data, setData] = useState(talabalar);
    const [ qiymat, setQiymat ] = useState('');
    const [turi, setTuri ] = useState('ism')

    const ochir = (id) => {
        let yangiData = data.filter( (value) => value.id !== id)  
            setData(yangiData)
        }

        const yoz = (e) => {
            setQiymat(e.target.value)

        }

        const qosh = () => {
            let yangiOdam = {id: data.length + 1, ism: qiymat }
            setData([ ...data, yangiOdam ])
        }

        const qidir = (e) => {
            let yangiMalumot = talabalar.filter( (value) => value[turi].toLowerCase().includes(e.target.value.toLowerCase()) );
            setData(yangiMalumot)

        }

        const category = (e) => {
            setTuri(e.target.value)
        }
    
  return (
    <div className='bg-green-200 pb-48'>

        <input onChange={qidir}  className='ml-96 w-96 bg-green-200 text-3xl' type="text"/>&nbsp;
        <select onChange={category} className='bg-green-200 text-3xl'>
            <option value="ism">ism</option>
            <option value="familiya">familiya</option>
        </select>
        <br /> <br />

        <input onChange={yoz} className='text-3xl ml-96 w-96 bg-green-200' type="text" />&nbsp;
        <button onClick={qosh} className='text-3xl'>Create</button>
        <br /> <br />
      <table className='pt-20'>
        <thead>
            <tr>
                <th className='text-3xl'>Id</th>
                <th className='text-3xl'>Ism</th>
                <th className='text-3xl'>familiya</th>
                <th className='text-3xl'>Harakat</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map( (value) => {
                    return (
                        <tr key={value.id}>
                            <th className='text-3xl'>{value.id}</th>
                            <th className='text-3xl'>{value.ism}</th>
                            <th className='text-3xl'>{value.familiya}</th>
                            <th className="text-3xl"><button onClick={ () => ochir(value.id)}>ochirish</button></th>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default About