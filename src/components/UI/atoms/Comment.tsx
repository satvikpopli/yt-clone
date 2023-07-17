import React from 'react'
import styled from 'styled-components'
import InteractionBtn from './InteractionBtn'
import { BiLike, BiDislike } from 'react-icons/bi'

interface Props {
  avatar: string,
  username: string,
  comment: string,
  id: number
}

export default function Comment({ avatar, username, comment, id }: Props) {
  return (
    <StyledComment>
      <Avatar src={avatar} alt={username} />
      <Details>
        <Username>{username}</Username>
        <CommentText>{comment}</CommentText>
        <Interactions>
          <Like />
          <Dislike />
          <ReplyBtn>Reply</ReplyBtn>
        </Interactions>
      </Details>
    </StyledComment>
  )
}

const StyledComment = styled.div`
  display: flex;
  gap: 1rem;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const Username = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  &::before {
    content: '@';
  }
`

const CommentText = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`

const Interactions = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.4rem;
`

const Like = styled(BiLike)`
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  &:hover {
    background-color: #e0e0e0;
  }
`

const Dislike = styled(BiDislike)`
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  &:hover {
    background-color: #e0e0e0;
  }
`

const ReplyBtn = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: transparent;

  &:hover {
    color: #575757;
  }
`