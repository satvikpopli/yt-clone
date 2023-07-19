import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import response from '../../../services/dummySearchResults'
import dateFormatterYT from '../../../utils/dateFormatter'
import SearchCard from '../molecules/SearchCard'
import styled from 'styled-components'
import IVideo from '../../../interfaces/video'
import mapFunc from '../../../utils/mapFunc'
import fetchData from '../../../services/searchResults'

export default function SearchResults({ togglemenustatus }: { togglemenustatus?: boolean }) {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("q");
    searchParams.set("q", id ? id : "");
    const [searchResults, setSearchResults] = useState<IVideo[]>([]);
    const fetchDummyData = async (id: string) => {
        return response;
    }
    useEffect(() => {
        if (!id) return;
        fetchDummyData(id).then(data => {
            if(!data) alert("No results found");
            const searchResults = data.items.map((video) => (mapFunc(video)));

            return searchResults;
        }).then(searchResults => {
            setSearchResults(searchResults);
        })
    }, [id]);

    return (
        <VideoSection togglemenustatus={togglemenustatus}>
            {searchResults.map((video) =>
                <SearchCard {...video} />
            )}
        </VideoSection>
    );
}

const VideoSection = styled.section<{ togglemenustatus?: boolean }>`
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