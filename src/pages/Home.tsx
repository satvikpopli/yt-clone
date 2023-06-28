import React from 'react'
import GlobalTemplate from '../components/templates/GlobalTemplate'
import ChipsMenu from '../components/UI/molecules/ChipsMenu'
import Main from '../components/UI/organisms/Main'

export default function Home() {
  return (
    <>
      <GlobalTemplate>
        <ChipsMenu />
        <Main />
      </GlobalTemplate>
    </>
  )
}