import React, { useState, useEffect } from 'react'
import GlobalTemplate from '../components/templates/GlobalTemplate'
import Main from '../components/UI/organisms/Main'
import styled from 'styled-components'
import EmbedPlayer from '../components/UI/atoms/EmbedPlayer'
import VideoInfo from '../components/UI/molecules/VideoPlayerInfo'
import Comments from '../components/UI/molecules/Comments'
import Recommendations from '../components/UI/organisms/Recommendations'
import dateFormatterYT from '../utils/dateFormatter'
import { useSearchParams } from 'react-router-dom'
import IVideo from '../interfaces/video'
import response from '../services/dummyPlayer'
import mapFunc from '../utils/mapFunc'

export default function Watch() {
  const [watchParams] = useSearchParams();
  const id = watchParams.get("v");
  watchParams.set("v", id ? id : "");
  const fetchDummyData = async (id: string) => {
    return response;
  }
  const [videoData, setVideoData] = useState<IVideo[]>([]);
  useEffect(() => {
    if (!id) return;
    fetchDummyData(id).then(data => {
      if (!data) return;
      const vidData = data.items.map((video) => (mapFunc(video)));
      return vidData;
    }).then(vidData => {
      if (!vidData) return;
      setVideoData(vidData);
    })
  }, [id]);

  return (
    <GlobalTemplate>
      <StyledMain>
        <VideoArea>
          <EmbedPlayer height='540px' width='945px' url={videoData[0]?.videoURL} />
          <VideoInfo {...videoData[0]} />
          <Comments comments={[{ id: 1, avatar: 'https://fastly.picsum.photos/id/483/200/200.jpg?hmac=tIKQEdwuW7trzVGWGE-cAgtpmRJla51INgO9dvJG3hA', username: 'Puneet', comment: 'lorem ipsum' },
          { id: 2, avatar: 'https://fastly.picsum.photos/id/483/200/200.jpg?hmac=tIKQEdwuW7trzVGWGE-cAgtpmRJla51INgO9dvJG3hA', username: 'Puneet', comment: 'lorem ipsum' }]} />
        </VideoArea>
        <Recommendations />
      </StyledMain>
    </GlobalTemplate>
  )
}

const StyledMain = styled.main`
  padding: 0 1rem;
  width: 100%;
  position: fixed;
  overflow-y: scroll;
  height: 100%;
  display: flex;
`

const VideoArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`