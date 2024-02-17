import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../Card/Card';

function VideoPlayer({videoData}) {
  let [searchParams]  = useSearchParams();
  const selectedId = searchParams.get('id') || "1"

  const [selected] = videoData?.filter((item) => {
    return item.id == selectedId
  })

  return (
    <>
     <div className='video-container sm:h-[400px] w-auto xl:w-3/4 md:h-[600px] 2xl:w-[1200px] '>
      <video className='bg-stone-950 w-full h-full md:object-cover'  
      src={selected?.sources}
      poster={selected?.thumb}
      // height={600}
      // width={800}
      controls
      autoPlay
      muted
      >

      </video>
      <div className='mt-5'>
        <Card 
        customClassName={''}
        customTitleClass={'text-xl'}
        title={selected?.title}
        description={selected?.description}
        />
      </div>
      </div>
    </>
  )
}

export default VideoPlayer