import React, {useState} from 'react'
import styled from 'styled-components'

export default function SearchInput({value, onChange, placeholder}: {value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string}) {
  return (
    <StyledInput type="text" value={value} onChange={onChange} placeholder={placeholder} />
  )
}

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.lightHover};
  width: 70%;
  padding: 0.7rem 1.25rem;
  font-size: 1rem;
  border-radius: 10em 0 0 10em;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.dark50};
  }
`