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

export default function RecommendationCard({ title, thumbnail, channel, views, timestamp, duration, avatar, videoURL, description }: Props) {
    return (
        <StyledCard>
            <StyledLink to={`https://youtube.com/watch?v=${videoURL.split('v=')[1]}`}>
                <ThumbnailContainer>
                    <Thumbnail src={thumbnail} alt={title} />
                    <Duration>{durationFormatter(duration)}</Duration>
                </ThumbnailContainer>
                <Details>
                    <h3>{title}</h3>
                    <MoreInfo>
                        <p>{channel}</p>
                    </MoreInfo>
                    <p>{viewsFormatter(views)} views • {timestamp}</p>
                </Details>
            </StyledLink>
        </StyledCard>
    )
}

const Duration = styled.p`
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

const ThumbnailContainer = styled.div`
    position: relative;
    min-width: 40%;
    width: 40%;
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
  border-radius: 0.3rem;
  max-width: 100%;
  &:hover {
    opacity: 0.85;
  }
`

const Details = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h3 {
    font-size: 0.95rem;
    font-weight: 500;
  }
  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.dark50};
  }
`

const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
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