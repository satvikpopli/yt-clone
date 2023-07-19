import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import VideoCard from '../molecules/VideoCard'
import dateFormatterYT from '../../../utils/dateFormatter'
import response from '../../../services/dummyFeed' // real response located in /services/feed
import IVideo from '../../../interfaces/video'
import mapFunc from '../../../utils/mapFunc'

export default function Feed() {
  const [videoData, setVideoData] = useState<IVideo[]>([])
  useEffect(() => {
    const getFeed = async () => {
      return response;
    }
    getFeed().then(data => {
      const feedData = data.items.map((video) => (mapFunc(video)));
      setVideoData(feedData);
    })
  }, []);
  return (
    <VideoSection>
      {videoData.map((video) => <VideoCard {...video} />)}
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