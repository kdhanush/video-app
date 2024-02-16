import React from "react";
import VideoPlayer from "../../components/Videoplayer/VideoPlayer";
import data from "../../data/videodata.json";
import Playlist from "../../components/Playlist/Playlist";

function Home() {

  return (
    <>
      <div className=" pt-4 px-2 md:p-8 gap-4 flex flex-col md:flex-row md:gap-8">
        <VideoPlayer 
         videoData = {data.videos}/>
        <Playlist 
        videoData = {data.videos}
        />
      </div>
    </>
  );
}

export default Home;
