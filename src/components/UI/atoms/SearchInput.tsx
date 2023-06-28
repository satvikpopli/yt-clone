import React from 'react'
import styled from 'styled-components'

export default function SearchInput() {
  return (
    <StyledInput type="text" placeholder='Search' />
  )
}

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.lightHover};
  width: 70%;
  padding: 0.7rem 1.25rem;
  font-size: 1rem;
  border-radius: 10em 0 0 10em;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.dark50};
  }
`