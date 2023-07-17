import React from 'react'
import styled from 'styled-components'
import Comment from '../atoms/Comment'

interface Props {
  comments: {
    id: number,
    avatar: string,
    username: string,
    comment: string
  }[]
}

export default function Comments({ comments }: Props) {
  return (
    <StyledComments>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} id={comment.id} avatar={comment.avatar} username={comment.username} comment={comment.comment} />
      ))}
    </StyledComments>
  )
}

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1.6rem;
  font-family: 'Roboto', sans-serif;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`