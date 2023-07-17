import React, {useState} from 'react'
import styled from 'styled-components'
import { LuSettings2 } from 'react-icons/lu'
import FilterMenu from './FilterMenu'
import { stat } from 'fs'

interface Props {
    status: boolean,
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Filter({status, setStatus} : Props) {
    const toggleFilterMenu = () => {
        setStatus(!status);
    }
    return (
        <StyledFilter>
            <FilterBtn onClick={toggleFilterMenu}>
                <LuSettings2 />
                <p>Filter</p>
            </FilterBtn>
            <FilterMenu status={status} />
        </StyledFilter>
    )
}

const FilterBtn = styled.button`
    height: 2rem;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.light};
    transition: all 50ms ease-in-out;
    &:hover {
    background-color: ${({ theme }) => theme.veryLight};
    }
`

const StyledFilter = styled.div`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    position: relative;
`