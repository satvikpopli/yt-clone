import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string,
    options: string[]
}

export default function FilterOptions({ title, options }: Props) {
    return (
        <StyledFilterOptions>
            <FilterTitle>{title}</FilterTitle>
            <FilterList>
                {options.map((option, index) => <FilterListItem key={index}>{option}</FilterListItem>)}
            </FilterList>
        </StyledFilterOptions>
    )
}

const StyledFilterOptions = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const FilterTitle = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
`

const FilterList = styled.ul`
    font-size: 0.9rem;
    font-weight: 300;
    list-style: none;
`

const FilterListItem = styled.li`
    margin: 0.75rem 0;
    cursor: pointer;
    transition: all 50ms ease-in-out;
    color: ${({ theme }) => theme.dark50};
    &:hover {
        color: ${({ theme }) => theme.darkDim};
    }
`