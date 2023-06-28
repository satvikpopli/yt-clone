import React from 'react'
import SidebarBtn from '../atoms/SidebarBtn'
import styled from 'styled-components'

interface Props {
    title?: string
    menu: {
        icon: string
        text: string
    }[]
}

export default function SidebarSection({ title, menu }: Props) {
    return (
        <>
            {title && <StyledTitle>{title}</StyledTitle>}
            {menu.map((btn, index) => (
                <SidebarBtn key={index} Icon={btn.icon} text={btn.text} />
            ))}
        </>
    )
}

const StyledTitle = styled.h3`
    font-size: 1.1rem;
    padding-left: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.dark};
    margin: 1rem;
`