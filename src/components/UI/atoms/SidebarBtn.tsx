import React from 'react'
import styled from 'styled-components'

interface Props {
    Icon: any
    text: string
}

export default function SidebarBtn({ Icon, text }: Props) {
    return (
        <StyledSidebarBtn>
            <Icon style={{ height: "1.5rem" }} />
            <span>{text}</span>
        </StyledSidebarBtn>
    )
}

const StyledSidebarBtn = styled.div`
    font-size: 0.95rem;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 10px;
    padding: 0.6rem 0.8rem;
    margin-left: 1rem;
    gap: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: ${({ theme }) => theme.light};
    cursor: pointer;

    &:hover {
    background-color: ${({ theme }) => theme.veryLight};
    }
`