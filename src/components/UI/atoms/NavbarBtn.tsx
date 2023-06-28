import React from 'react'
import styled from 'styled-components'

interface Props {
    icon: JSX.Element
}


export default function NavbarBtn({ icon }: Props) {
    return (
        <StyledNavbarBtn>
            {icon}
        </StyledNavbarBtn>
    )
}

const StyledNavbarBtn = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    background-color: ${({ theme }) => theme.light};
    border-radius: 50%;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
    background-color: ${({ theme }) => theme.lightHover};
    }
`