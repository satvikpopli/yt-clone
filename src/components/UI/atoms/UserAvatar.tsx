import React from 'react'
import styled from 'styled-components'

export default function UserAvatar() {
  return (
      <StyledUserAvatar src="https://placekitten.com/100/100" alt="user-avatar" />
  )
}

const StyledUserAvatar = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    margin-left: 1rem;
    cursor: pointer;
`