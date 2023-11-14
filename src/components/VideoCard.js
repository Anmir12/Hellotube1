import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const{snippet,statistics}=info;
    const{channelTitle,title,thumbnails}= snippet;
    const{viewCount} = statistics;
    // console.log(channelTitle)
  return (
    <div className='m-2 shadow-lg bg-gray-200'>
     <img className="rounded-lg" src={thumbnails.medium.url}/>
     <p className='font-bold'>{channelTitle}</p>
     <p>{viewCount} views</p>
    </div>
  )
}

export default VideoCard;