import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [number, setNumber] = useState()
    const [password, setPassword] = useState()

    function loginSubmit(e){
        e.preventDefault();

        fetch('https://autoapi.dezinfeksiyatashkent.uz/api/',
          {
            method:'POST',
            headers:{

            }
          }
        )

        e.target.reset();
        
    }

  return (
    <div className='box mt-[220px] '>

        <form onSubmit={loginSubmit} required type="text">

            <div className='flex flex-col gap-3 mb-8'>

            <input onChange={(e)=> setNumber((e?.target?.value))} type="number" placeholder='Phone Number' className='phone w-[250px] text-sm h-auto border-2 border-gray-400 text-gray-500 outline-none pt-2 pb-2 pl-2 rounded-lg ' />

            <input onChange={(e)=> setPassword((e?.target?.value))} type="text" placeholder='Password' className='phone w-[250px] h-auto text-sm border-2 border-gray-400 text-gray-500 outline-none pt-2 pb-2 pl-2 rounded-lg ' />

            </div>

            <button className='max-w-[250px] w-full h-auto bg-blue-950 text-white text-center py-3 outline-none text-xs rounded-md '>Submit</button>

        </form>

    </div>
  )
}

export default Login