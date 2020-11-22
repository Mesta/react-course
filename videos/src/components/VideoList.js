import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItem = videos.map((video) => <VideoItem key={video.id.videoId}
                                                     video={video}
                                                     onVideoSelect={onVideoSelect}/>)
  return (
    <div className="ui relaxed divided list">
      {videoItem}
    </div>
  )
}

export default VideoList
