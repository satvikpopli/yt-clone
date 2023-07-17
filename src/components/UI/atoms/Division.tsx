import React from 'react'
import styled from 'styled-components'

export default function Division() {
  return (
    <StyledHr />
  )
}

const StyledHr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.lightHover};
  margin: 1rem;
`