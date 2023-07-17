import React, { useState } from 'react'
import styled from 'styled-components'
import VideoCard from '../molecules/VideoCard'
import dateFormatterYT from '../../../utils/dateFormatter'
import response from '../../../services/feed'

export default function Feed() {
  type item = { 
    title: string,
    thumbnail: string,
    channel: string,
    views: number,
    timestamp: string,
    duration: string,
    channelImage: string,
    videoURL: string
  }
  const [videoData, setVideoData] = useState<item[]>([])

  // get API key from .env file
  // const API_KEY = 'AIzaSyAZ5OQCgV_yi1U69TSlFtxJAk1QrFXlcOk'
  const getFeed = async () => {
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=48&key=${API_KEY}`)
    // const data = await response.json()
    return response;
  }

  getFeed().then(data => {
    // item is an array of objects with the following properties:
    // title, thumbnail, channel, views, timestamp, duration, channelImage, videoURL
    const feedData = data.items.map((item: any) => {
      return {
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channel: item.snippet.channelTitle,
        views: item.statistics.viewCount,
        timestamp: dateFormatterYT(item.snippet.publishedAt),
        duration: item.contentDetails.duration,
        channelImage: item.snippet.thumbnails.default.url,
        videoURL: `https://www.youtube.com/watch?v=${item.id}`
      }
    })
    setVideoData(feedData);
  })

  return (
    <VideoSection>
      {videoData.map((video: item) =>
        <VideoCard
          key={video.title}
          title={video.title}
          thumbnail={video.thumbnail}
          channel={video.channel}
          views={video.views}
          timestamp={video.timestamp}
          duration={video.duration}
          avatar={video.channelImage}
          videoURL={video.videoURL}
        />
      )}
    </VideoSection>
  )
}

const VideoSection = styled.section`
    position: relative;
    top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    overflow-y: scroll;
    height: 100%;
    padding: 1rem 2rem;
`