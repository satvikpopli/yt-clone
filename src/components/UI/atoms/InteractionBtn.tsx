import React from 'react'
import styled from 'styled-components'

export default function InteractionBtn({ text, color, logo, flat }: { text?: string, color?: string, logo?: React.ReactNode, flat?: string }) {
    return (
        <StyledBtn color={color} flat={flat}>
            {logo}
            {text}
        </StyledBtn>
    )
}

const StyledBtn = styled.button<{ color?: string, flat?: string }>`
    background-color: ${props => props.color === 'dark' ? 'black' : '#f1f1f1'};
    color: ${props => props.color === 'dark' ? 'white' : 'black'};
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: ${props => props.flat === 'left' ? '0 10rem 10rem 0' : props.flat === 'right' ? '10rem 0 0 10rem' : '10rem'};    
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &:hover {
        background-color: ${props => props.color === 'dark' ? '#303030' : '#dcdcdc'};
    }
`
