import React from 'react'
import styled from 'styled-components'

export default function Main({children} : {children: React.ReactNode}) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

const StyledMain = styled.main`
    width: 82.5%;
    left: 17.5%;
    position: fixed;
    overflow-y: scroll;
    height: 90%;
`