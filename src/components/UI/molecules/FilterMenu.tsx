import React from 'react'
import styled from 'styled-components'
import Division from '../atoms/Division'
import FilterOptions from '../atoms/FilterOptions'
import FilterOptionsData from '../../../data/filterOptions'

interface Props {
    status: boolean
}

export default function FilterMenu({ status }: Props) {
    return (
        <MenuContainer status={status}>
            {FilterOptionsData.map((filterOption) => <FilterOptions key={filterOption.id} title={filterOption.title} options={filterOption.options} />)}
            <Division />
        </MenuContainer>
    )
}

const MenuContainer = styled.div<Props>`
    width: 100%;
    height: 20rem;
    background-color: ${({ theme }) => theme.light};
    transition: all 200ms ease-in-out;
    position: absolute;
    z-index: -1;
    top: ${({ status }) => status === true ? '2rem' : '-22rem'};
    opacity: ${({ status }) => status === true ? '1' : '0'};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem 1rem;
`