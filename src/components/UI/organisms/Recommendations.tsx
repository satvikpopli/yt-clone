import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import response from '../../../services/dummyFeed'
import dateFormatterYT from '../../../utils/dateFormatter'
import RecommendationCard from '../molecules/RecommendationCard'
import styled from 'styled-components'
import mapFunc from '../../../utils/mapFunc'
import IVideo from '../../../interfaces/video'

export default function Recommendations() {
    const { id } = useParams();
    const [recommendations, setRecommendations] = useState<IVideo[]>([]);
    useEffect(() => {
        const fetchDummyData = async () => {
            return response;
        };
        fetchDummyData().then(data => {
            const recommendations = data.items.map((video) => (mapFunc(video)));
            return recommendations;
        }).then(recommendations => {
            setRecommendations(recommendations);
        })
    }, [id]);
    return (
        <VideoSection>
            {recommendations.map((video: IVideo) =>
                <RecommendationCard {...video} />
            )}
        </VideoSection>
    )
}

const VideoSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`