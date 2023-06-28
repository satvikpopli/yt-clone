import React from 'react'
import NavbarBtn from './NavbarBtn'

export default function Hamburger() {
  return (
    <NavbarBtn
      icon=
      {<svg
        width="24"
        height="24"
        display="block"
        pointerEvents="none"
        viewBox="0 0 24 24"
        style={{ width: "100%", height: "100%" }}
      >
        <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
      </svg>}
    />
  )
}