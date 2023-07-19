import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import viewsFormatter from '../../../utils/viewsFormatter'
import durationFormatter from '../../../utils/durationFormatter'
import IVideo from '../../../interfaces/video'

export default function SearchCard(video : IVideo) {
    return (
        <StyledCard>
        <StyledLink to={`/watch?v=${video.videoURL.split('v=')[1]}`}>
                <ThumbnailContainer>
                    <Thumbnail src={video.thumbnail} alt={video.title} />
                    <Duration>{durationFormatter(video.duration)}</Duration>
                </ThumbnailContainer>
                <Details>
                    <h3>{video.title}</h3>
                    <p>{viewsFormatter(video.views)} views • {video.timestamp}</p>
                    <MoreInfo>
                        <Avatar src={video.avatar} alt={video.channel} />
                        <Channel>{video.channel}</Channel>
                    </MoreInfo>
                    <Description>{video.description?.substring(0, 200)}...</Description>
                </Details>
            </StyledLink>
        </StyledCard>
    )
}

export const Duration = styled.p`
    font-size: 0.75rem;
    padding: 0.2rem;
    border-radius: 3px;
    font-weight: 500;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
`

const Description = styled.p`
    font-weight: 300;
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.dark50};
`

const Channel = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.dark50};
`

const ThumbnailContainer = styled.div`
    position: relative;
    min-width: 25vw;
`

const StyledCard = styled.div`
  font-family: 'Roboto', sans-serif;
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: inherit;
`

const Thumbnail = styled.img`
  transition: all 200ms ease-in-out;
  border-radius: 0.6rem;
  width: 100%;
  height: calc(width * 0.5625);
  &:hover {
    opacity: 0.85;
  }
`

const Details = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h3 {
    font-size: 1.05rem;
    font-weight: 500;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.dark50};
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
  margin-top: 0.4rem;
`