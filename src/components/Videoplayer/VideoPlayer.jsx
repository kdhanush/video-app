import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../Card/Card";

function VideoPlayer({ videoData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id") || "1";

  useEffect(() => {
    const index = videoData.findIndex((video) => video.id === selectedId);
    setCurrentIndex(index !== -1 ? index : 0);
  }, [videoData, selectedId]);

  const playNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  const handleVideoEnd = () => {
    playNextVideo();
  };

  return (
    <div className="video-container h-[50dvh] w-auto lg:w-3/4 2xl:w-[1200px]">
      <video
        className="bg-stone-950 w-full h-[200px] sm:h-[350px] lg:h-[500px] md:object-cover"
        src={videoData[currentIndex]?.sources}
        poster={videoData[currentIndex]?.thumb}
        controls
        autoPlay
        playsinline
        onEnded={handleVideoEnd}
        muted
      />
      <div className="mt-5">
        <Card
          customClassName={"h-[150px]"}
          customTitleClass={"text-xl"}
          title={videoData[currentIndex]?.title}
          description={videoData[currentIndex]?.description}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
