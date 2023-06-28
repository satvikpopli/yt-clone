import React, { useState } from 'react'
import styled from 'styled-components'
import VideoCard from '../molecules/VideoCard'

const dateFormatterYT = (date: string) => {
  // input format: 2021-08-10T15:00:11Z
  // output format: X minutes/hours/days/weeks/months/years ago
  const dateObj = new Date(date);
  const currentDate = new Date();
  const diff = currentDate.getTime() - dateObj.getTime();
  const diffDays = Math.floor(diff / (1000 * 3600 * 24));
  const diffWeeks = Math.floor(diff / (1000 * 3600 * 24 * 7));
  const diffMonths = Math.floor(diff / (1000 * 3600 * 24 * 30));
  const diffYears = Math.floor(diff / (1000 * 3600 * 24 * 365));
  if (diff < 60000) {
    if (Math.floor(diff / 1000) === 1) return `${Math.floor(diff / 1000)} second ago`
    return `${Math.floor(diff / 1000)} seconds ago`
  }
  if (diff < 3600000) {
    if (Math.floor(diff / 60000) === 1) return `${Math.floor(diff / 60000)} minute ago`
    return `${Math.floor(diff / 60000)} minutes ago`
  }
  if (diff < 86400000) {
    if (Math.floor(diff / 3600000) === 1) return `${Math.floor(diff / 3600000)} hour ago`
    return `${Math.floor(diff / 3600000)} hours ago`
  }
  if (diffDays < 7) {
    if (diffDays === 1) return `${diffDays} day ago`
    return `${diffDays} days ago`
  }
  if (diffWeeks < 4) {
    if (diffWeeks === 1) return `${diffWeeks} week ago`
    return `${diffWeeks} weeks ago`
  }
  if (diffMonths < 12) {
    if (diffMonths === 1) return `${diffMonths} month ago`
    return `${diffMonths} months ago`
  }
  if (diffYears === 1) return `${diffYears} year ago`
  return `${diffYears} years ago`
}

export default function Feed() {
  const [videoData, setVideoData] = useState([])

  // get API key from .env file
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

  // get youtube home feed using API
  const getFeed = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=48&key=${API_KEY}`)
    const data = await response.json()
    console.log(data)
    return data;
  }

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

  getFeed().then(data => {
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    overflow-y: scroll;
    height: 100%;
    padding: 1rem 2rem;
`