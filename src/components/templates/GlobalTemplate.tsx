import React from 'react'
import styled from 'styled-components'
import Navbar from '../UI/organisms/Navbar'

interface Props {
    children?: React.ReactNode
}

export default function GlobalTemplate({ children } : Props) {
    return (
        <StyledGlobalTemplate>
            <Navbar />
            <StyledTemplate>
                {children}
            </StyledTemplate>
        </StyledGlobalTemplate>
    )
}

const StyledGlobalTemplate = styled.div`
    width: 100%;
`

const StyledTemplate = styled.div`
    display: flex;
    flex-direction: row;
`