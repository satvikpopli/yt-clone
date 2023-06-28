import React from 'react'
import styled from 'styled-components'

interface Props {
    text: string
}

export default function Chip({ text }: Props) {
    return (
        <StyledChip>{text}</StyledChip>
    )
}

const StyledChip = styled.button`
    background-color: ${({ theme }) => theme.veryLight};
white-space: nowrap;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.dark};
    transition: all 100ms ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.lightHover};
    }
`