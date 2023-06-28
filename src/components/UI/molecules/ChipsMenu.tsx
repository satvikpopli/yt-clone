import React from 'react'
import styled from 'styled-components'
import Chip from '../atoms/Chip'
import { chipsMenuBtns } from '../../../data/chips';
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

export default function ChipsMenu() {
    return (
        <ChipsMenuContainer>
            <AiOutlineLeft />
            <StyledChipsMenu>
                {chipsMenuBtns.map((chip, index) =>
                    <Chip key={index} text={chip} />
                )}
            </StyledChipsMenu>
            <AiOutlineRight />
        </ChipsMenuContainer>
    )
}

const ChipsMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: fixed;
    left: 18%;
    max-width: 80%;
    background-color: ${({ theme }) => theme.light};
`

const StyledChipsMenu = styled.div`
    display: flex;
    overflow-x: auto;
    max-width: 95%;
    padding: 1.5rem 0;
    gap: 1rem;
`