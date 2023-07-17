import React from 'react'
import GlobalTemplate from '../components/templates/GlobalTemplate'
import ChipsMenu from '../components/UI/molecules/ChipsMenu'
import Main from '../components/UI/organisms/Main'
import Feed from '../components/UI/organisms/Feed'
import Sidebar from '../components/UI/organisms/Sidebar'

export default function Home() {
  return (
    <>
      <GlobalTemplate>
        <Sidebar />
        <Main>
          <ChipsMenu />
          <Feed />
        </Main>
      </GlobalTemplate>
    </>
  )
}