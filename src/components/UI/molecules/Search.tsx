import React from 'react'
import { Form } from 'react-router-dom'
import SearchInput from '../atoms/SearchInput'
import SearchBtn from '../atoms/SearchBtn'
import NavbarBtn from '../atoms/NavbarBtn'
import styled from 'styled-components'
import { MdOutlineMic } from 'react-icons/md'

export default function Search() {
  return (
    <StyledForm>
      <SearchInput />
      <SearchBtn />
      <NavbarBtn icon={<MdOutlineMic />} />
    </StyledForm>
  )
}

const StyledForm = styled(Form)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0;
`