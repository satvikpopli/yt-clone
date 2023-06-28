import React from 'react'
import styled from 'styled-components'
import Division from '../atoms/Division'
import SidebarSection from '../molecules/SidebarSection'

import { generalMenuBtns, userMenuBtns, exploreBtns, productBtns, settingsBtns } from '../../../data/sidebar'

export default function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarSection menu={generalMenuBtns} />
      <Division />
      <SidebarSection menu={userMenuBtns} />
      <Division />
      <SidebarSection title="Explore" menu={exploreBtns} />
      <Division />
      <SidebarSection title="More from YouTube" menu={productBtns} />
      <Division />
      <SidebarSection menu={settingsBtns} />
      <StyledWatermark>© 2023 Google LLC</StyledWatermark>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  background-color: ${({ theme }) => theme.light};
  width: 17.5%;
  position: fixed;
  overflow-y: scroll;
  height: 100%;
`

const StyledWatermark = styled.span`
  font-family: 'Roboto', sans-serif;
  padding-left: 1rem;
  display: inline-block;
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.dark50};
  margin: 0.5rem;
`