import React from 'react'
import styled from 'styled-components'
import Feed from './Feed'

export default function Main() {
  return (
    <StyledMain>
      <Feed />
    </StyledMain>
  )
}

const StyledMain = styled.div`
    width: 82.5%;
    height: 100vh;
    padding-bottom: 10rem;
    margin-bottom: 5rem;
    top: 10rem;
    left: 17.5%;
    position: fixed;
    overflow-y: scroll;
    height: 100%;
`