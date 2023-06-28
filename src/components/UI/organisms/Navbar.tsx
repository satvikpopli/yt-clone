import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../atoms/Hamburger'
import Branding from '../atoms/Branding'
import Search from '../molecules/Search'
import NavbarMenu from '../molecules/NavbarMenu'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <StyledNavbar>
      <Hamburger />
      <Branding />
      <Search />
      <NavbarMenu />
    </StyledNavbar>
  )
}

const StyledNavbar = styled.div`
  background-color: ${({ theme }) => theme.light};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 1rem;
  z-index: 10;
  width: 100vw;
  max-width: 100%;
`