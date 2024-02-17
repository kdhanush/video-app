import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/Videoplayer/VideoPlayer";
import data from "../../data/videodata.json";
import Playlist from "../../components/Playlist/Playlist";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";

function Home() {

  const [videos,setVideos] = useState(data.videos)

  const handleSearch = (value) => {
    const filteredData = data.videos.filter((item) => {
      return value.toLowerCase() === '' ? true : item.title.toLowerCase().includes(value.toLowerCase());
    });
    setVideos(filteredData);
  };

  return (
    <>
      <Navbar />
      <div className=" w-full pt-4 px-2 lg:p-8 gap-4 flex flex-col sm:flex-col lg:flex-row lg:gap-8">
        <VideoPlayer videoData={videos} />
        <div>
        <Search 
        onSearch = {handleSearch}
        />
        <Playlist videoData={videos} />
        </div>
      </div>
    </>
  );
}

export default Home;
