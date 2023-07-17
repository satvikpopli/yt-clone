import React from 'react'
import styled from 'styled-components'

interface Props {
    views: string | number,
    timestamp: string,
    description?: string
}

export default function Description({ views, timestamp, description }: Props) {
    const [showMore, setShowMore] = React.useState(false)
    function toggleDescriptionState() {
        setShowMore(!showMore)
    }
    return (
        <StyledDescription >
            <Views>{views} views  {timestamp}</Views>
            {description && <p>{showMore ? description : description?.substring(0, 100) + (description && (description?.length > 100) ? '...' : '')} </p>}
            {description && (description?.length > 100) && <ShowMoreBtn onClick={toggleDescriptionState}>{showMore ? 'Show Less' : 'Show More'}</ShowMoreBtn>}
        </StyledDescription>
    )
}

const StyledDescription = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 1.5rem 0;
    background-color: #f1f1f1;
    border-radius: 1rem;
    color: black;
    padding: 1rem;
`

const Views = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
    color: #303030;
    margin-bottom: 0.5rem;
    display: block;
`

const ShowMoreBtn = styled.button`
    background-color: transparent;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: #000;
    cursor: pointer;
    margin-top: 0.5rem;
    display: block;
`