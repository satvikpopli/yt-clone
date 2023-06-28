import React from 'react'
import styled from 'styled-components'
import Navbar from '../UI/organisms/Navbar'
import Sidebar from '../UI/organisms/Sidebar'

interface Props {
    children?: React.ReactNode
}

export default function GlobalTemplate({ children } : Props) {
    return (
        <StyledGlobalTemplate>
            <Navbar />
            <StyledTemplate>
                <Sidebar />
                {children}
            </StyledTemplate>
        </StyledGlobalTemplate>
    )
}

const StyledGlobalTemplate = styled.div`
    /* position: fixed; */
    /* top: 0; */
    /* left: 0; */
    width: 100%;
`

const StyledTemplate = styled.div`
    display: flex;
    flex-direction: row;
`