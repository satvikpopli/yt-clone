import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import viewsFormatter from '../../../utils/viewsFormatter'
import Description from '../atoms/Description'
import InteractionBtn from '../atoms/InteractionBtn'
import { PiShareFatBold } from 'react-icons/pi'
import { FiDownload, FiMoreHorizontal } from 'react-icons/fi'
import { BiLike, BiDislike } from 'react-icons/bi'
import IVideo from '../../../interfaces/video'

export default function VideoPlayerInfo(video : IVideo) {
  return (
    <StyledInfo>
      <VideoTitle>{video.title}</VideoTitle>
      <VideoInfo>
        <ChannelInfo>
          <Avatar src={video.avatar} alt={video.channel} />
          <ChannelDetails>
            <ChannelName>{video.channel}</ChannelName>
            <ChannelSubscribers>100k subscribers</ChannelSubscribers>
          </ChannelDetails>
          <InteractionBtn color='dark' text='Subscribe' />
        </ChannelInfo>
        <Interactions>
          <LikeDislike>
            <InteractionBtn flat='right' color='light' text='' logo={<BiLike />} />
            <InteractionBtn flat='left' color='light' text='' logo={<BiDislike />} />
          </LikeDislike>
          <InteractionBtn color='light' text='Share' logo={<PiShareFatBold />} />
          <InteractionBtn color='light' text='Download' logo={<FiDownload />} />
          <InteractionBtn color='light' text='' logo={<FiMoreHorizontal />} />
        </Interactions>
      </VideoInfo>
      <Description views={viewsFormatter(video.views)} timestamp={video.timestamp} description='Lorem' />
    </StyledInfo>
  )
}

const StyledInfo = styled.div`
  font-family: 'Roboto', sans-serif;
`

const VideoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.75rem 0.25rem;
`

const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-right: 0.5rem;
`

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const ChannelName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`

const ChannelSubscribers = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #606060;
`

const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LikeDislike = styled.div`
  display: flex;
  align-items: center;
`

const Views = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`