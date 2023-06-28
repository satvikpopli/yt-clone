import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  title: string,
  thumbnail: string,
  channel: string,
  views: number,
  timestamp: string,
  duration: string
  avatar: string,
  videoURL: string
}

const viewsFormatter = (views: number) => {
  if (views >= 1000000) {
    // hide the decimal if it's 0
    if (views % 1000000 === 0) {
      return `${(views / 1000000).toFixed(0)}M`
    }
    return `${(views / 1000000).toFixed(1)}M`
  }
  if (views >= 1000) {
    // hide the decimal if it's 0
    if (views % 1000 === 0) {
      return `${(views / 1000).toFixed(0)}K`
    }
    return `${(views / 1000).toFixed(1)}K`
  }
  return views
}

export default function VideoCard({ title, thumbnail, channel, views, timestamp, duration, avatar, videoURL }: Props) {
  return (
    <StyledCard>
      <StyledLink to={`https://youtube.com/watch?v=${videoURL.split('v=')[1]}`}>
        <Thumbnail src={thumbnail} alt={title} />
        <Details>
          <h3>{title}</h3>
          <MoreInfo>
            <Avatar src={avatar} alt={channel} />
            <div>
              <p>{channel}</p>
              <p>{viewsFormatter(views)} views • {timestamp}</p>
            </div>
          </MoreInfo>
        </Details>
      </StyledLink>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  font-family: 'Roboto', sans-serif;
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Thumbnail = styled.img`
  transition: all 200ms ease-in-out;
  border-radius: 1rem;
  width: 100%;
  height: calc(width * 0.5625);
  &:hover {
    opacity: 0.85;
    transform: scale(1.02);
  }
`

const Details = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
`

const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 0.9rem;
    color: #606060;
  }
  p:last-child{
    font-size: 0.8rem;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    justify-content: space-between;
  }
`

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  display: block;
  border-radius: 50%;
  margin-right: 0.5rem;
`