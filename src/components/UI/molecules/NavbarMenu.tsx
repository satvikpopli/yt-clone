import React from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'
import { RiVideoAddLine } from 'react-icons/ri'
import NavbarBtn from '../atoms/NavbarBtn'
import UserAvatar from '../atoms/UserAvatar'
import styled from 'styled-components'

export default function NavbarMenu() {
    return (
        <StyledNavbarMenu>
            <NavbarBtn icon={<RiVideoAddLine />} />
            <NavbarBtn icon={<IoNotificationsOutline />} />
            <UserAvatar />
        </StyledNavbarMenu>
    )
}

const StyledNavbarMenu = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 1rem;
    width: 25%;
`