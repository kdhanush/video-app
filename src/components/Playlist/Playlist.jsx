import React from 'react'
import Card from '../Card/Card'


function Playlist({videoData}) {

  return (
    <div className='flex flex-col h-[850px] 2xl:w-[500px] overflow-auto gap-4'>
     {videoData.map((item ,idx) => (
    <Card
    key={idx}
    id={item.id}
    image={item.thumb}
    title={item.title}
    />))}
    </div>
  )
}

export default Playlist