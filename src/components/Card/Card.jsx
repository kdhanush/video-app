import React from 'react'
import { Link } from 'react-router-dom'


function Card ({id, image, title, subtitle, description, customClassName, customTitleClass}) {

  return (
    <Link to={{
      search: `?id=${id}`,
    }}
>
    <div className={`${customClassName} lg:h-fit-content rounded-xl border-zinc-900 bg-stone-950 shadow-md flex p-4 gap-4 `}>

    {image && <img className=' h-24 rounded-xl w-[160px]' src={image} alt="image" />}
    <div className='flex flex-col'>
    <p className={`${customTitleClass} text-base`}>{title}</p>
    <p className=' text-sm text-zinc-400'>{subtitle}</p>
    <p className=' text-sm text-zinc-500 pt-4'>{description}</p>
    </div>
    </div>
    </Link>
  )
}

export default Card