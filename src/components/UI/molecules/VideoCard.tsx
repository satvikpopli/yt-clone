import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import viewsFormatter from '../../../utils/viewsFormatter'
import IVideo from '../../../interfaces/video'

export default function VideoCard(video: IVideo) {
  return (
    <StyledCard>
      <StyledLink to={`/watch?v=${video.videoURL.split('v=')[1]}`}>
        <Thumbnail src={video.thumbnail} alt={video.title} />
        <Details>
          <h3>{video.title}</h3>
          <MoreInfo>
            <Avatar src={video.avatar} alt={video.channel} />
            <div>
              <p>{video.channel}</p>
              <p>{viewsFormatter(video.views)} views • {video.timestamp}</p>
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