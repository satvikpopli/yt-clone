import React from 'react'
import styled from 'styled-components'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchBtn() {
    return (
        <StyledSearchBtn type="submit">
            <IoSearchOutline />
        </StyledSearchBtn>
    )
}

const StyledSearchBtn = styled.button`
    height: 100%;
    border: 1px solid ${({ theme }) => theme.lightHover};
    padding: 0.65rem 1rem;
    font-size: 1rem;
    border-radius: 0 15em 15em 0;
    outline: none;
    color: ${({ theme }) => theme.dark50};
    cursor: pointer;
    width: 4rem;

    &:hover {
        background-color: ${({ theme }) => theme.lightHover};
    }
`