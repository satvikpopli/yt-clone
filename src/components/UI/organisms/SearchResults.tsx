import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import response from '../../../services/feed'
import dateFormatterYT from '../../../utils/dateFormatter'
import SearchCard from '../molecules/SearchCard'
import styled from 'styled-components'

interface Props {
    togglemenustatus?: boolean;
}

export default function SearchResults({togglemenustatus}: Props) {
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
    const [searchResults, setSearchResults] = useState<item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${id}&maxResults=50&key=AIzaSyAReqQee66-jmxwFfU2atn33d0aBPMa0Vg`
                );
                const data = await response.json();
                const videoIds = data.items.map((video : any) => video.id.videoId);
                const videoDetailsResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(
                        ','
                    )}&key=AIzaSyAZ5OQCgV_yi1U69TSlFtxJAk1QrFXlcOk`
                );
                const videoDetailsData = await videoDetailsResponse.json();
                console.log(videoDetailsData);
                const videosWithDetails = data.items.map((video : any) => ({
                    ...video,
                    statistics: videoDetailsData.items.find((item : any) => item.id === video.id.videoId).statistics,
                    contentDetails: videoDetailsData.items.find((item : any) => item.id === video.id.videoId).contentDetails,
                }));
                console.log(videosWithDetails);
                return videosWithDetails;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData().then(data => {
            if (data) { 
                console.log(data);
                const searchResults = data.map((item: any) => {
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
                return searchResults;
            } else {
                return [];
            }
        }).then(searchResults => {
            setSearchResults(searchResults);
        })
    }, [id]);

    return (
        <VideoSection togglemenustatus={togglemenustatus}>
            {searchResults.map((video: item) =>
                <SearchCard
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
    );
}

const VideoSection = styled.section<Props>`
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 200ms ease-in-out;
    top: ${({ togglemenustatus }) => togglemenustatus ? '22rem' : '0'};
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 0rem 2rem;
`