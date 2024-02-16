import React from 'react'
import { Link } from 'react-router-dom'


function Card ({id,image, title}) {

  return (
    <Link to={{
      search: `?id=${id}`,
    }}
>
    <div className='h-[200px] w-[400px] rounded-xl border-zinc-900 bg-zinc-900 transition duration-500 ease-in-out hover:scale-105 shadow-md flex p-4 gap-4'>

    <img className=' w-2/4' src={image} alt="image" />
    <p>{title}</p>
    </div>
    </Link>
  )
}

export default Card