import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import viewsFormatter from '../../../utils/viewsFormatter'
import durationFormatter from '../../../utils/durationFormatter'


interface Props {
    title: string,
    thumbnail: string,
    channel: string,
    views: number,
    timestamp: string,
    duration: string
    avatar: string,
    videoURL: string,
    description?: string,
}

export default function SearchCard({ title, thumbnail, channel, views, timestamp, duration, avatar, videoURL, description }: Props) {
    return (
        <StyledCard>
            <StyledLink to={`https://youtube.com/watch?v=${videoURL.split('v=')[1]}`}>
                <ThumbnailContainer>
                    <Thumbnail src={thumbnail} alt={title} />
                    <Duration>{durationFormatter(duration)}</Duration>
                </ThumbnailContainer>
                <Details>
                    <h3>{title}</h3>
                    <p>{viewsFormatter(views)} views • {timestamp}</p>
                    <MoreInfo>
                        <Avatar src={avatar} alt={channel} />
                        <Channel>{channel}</Channel>
                    </MoreInfo>
                    <Description>{description?.substring(0, 200)}...</Description>
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