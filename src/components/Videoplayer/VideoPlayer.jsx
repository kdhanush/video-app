import React from 'react'
import { useSearchParams } from 'react-router-dom'

function VideoPlayer({videoData}) {
  let [searchParams]  = useSearchParams();
  const selectedId = searchParams.get('id') || 1

  const selected = videoData.filter((item) => {
    return item.id == selectedId
  })

  return (
    <>
     <div className='video-container md:w-[1000px] md:h-[600px] 2xl:w-[1200px] '>
      <h1>Video Player</h1>
      <video className='w-full h-full object-cover'  
      src={selected[0]?.sources}
      poster={selected[0]?.thumb}
      // height={600}
      // width={800}
      controls
      autoPlay
      >

      </video>
      </div>
    </>
  )
}

export default VideoPlayer