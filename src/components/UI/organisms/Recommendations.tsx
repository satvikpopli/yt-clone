import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import response from '../../../services/feed'
import dateFormatterYT from '../../../utils/dateFormatter'
import RecommendationCard from '../molecules/RecommendationCard'
import styled from 'styled-components'

export default function Recommendations() {
    type item = {
        title: string,
        thumbnail: string,
        channel: string,
        views: number,
        timestamp: string,
        duration: string,
        channelImage: string,
        videoURL: string,
        description?: string
    }
    const { id } = useParams();
    const [recommendations, setRecommendations] = useState<item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch(`/api/search?id=${id}`);
            // const data = await response.json();
            // setRecommendations(data);
            return response;
        };
        fetchData().then(data => {
            const recommendations = data.items.map((item: any) => {
                return {
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.medium.url,
                    channel: item.snippet.channelTitle,
                    views: item.statistics.viewCount,
                    timestamp: dateFormatterYT(item.snippet.publishedAt),
                    duration: item.contentDetails.duration,
                    channelImage: item.snippet.thumbnails.default.url,
                    videoURL: `https://www.youtube.com/watch?v=${item.id}`,
                    description: item.snippet.description
                }
            })
            return recommendations;
        }).then(recommendations => {
            setRecommendations(recommendations);
        })
    }, [id]);
  return (
      <VideoSection>
          {recommendations.map((video: item) =>
              <RecommendationCard
                  key={video.title}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  channel={video.channel}
                  views={video.views}
                  timestamp={video.timestamp}
                  duration={video.duration}
                  avatar={video.channelImage}
                  videoURL={video.videoURL}
                  description={video.description}
              />
          )}
      </VideoSection>
  )
}

const VideoSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`