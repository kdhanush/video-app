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
      return value.toLowerCase() === '' ? item : item.title.toLowerCase().includes(value.toLowerCase());
    });
    setVideos(filteredData);
  };

  return (
    <div className="flex flex-col absolute m-4 w-dvh">
    <Navbar />
    <Search 
        onSearch = {handleSearch}
        />
      <div className=" w-full h-[90dvh] overflow-hidden mt-2 pt-4 px-2 lg:p-8 gap-4 flex flex-col sm:flex-col lg:flex-row lg:gap-8">
        <VideoPlayer videoData={data.videos} />
        <div>
        <Playlist videoData={videos} />
        </div>
      </div>
    </div>
  );
}

export default Home;
