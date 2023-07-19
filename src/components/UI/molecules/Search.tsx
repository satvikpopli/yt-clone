import React, { useState } from 'react'
import { Form, Navigate, useNavigate } from 'react-router-dom'
import SearchInput from '../atoms/SearchInput'
import SearchBtn from '../atoms/SearchBtn'
import NavbarBtn from '../atoms/NavbarBtn'
import styled from 'styled-components'
import { MdOutlineMic } from 'react-icons/md'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/results?q=${searchQuery}`);
  }
  return (
    <StyledForm onSubmit={submit}>
      <SearchInput value={searchQuery} onChange={(e) => setSearchQuery(e.currentTarget.value)} placeholder='Search' />
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