import React, { useState, useEffect } from 'react'
import GlobalTemplate from '../components/templates/GlobalTemplate'
import Main from '../components/UI/organisms/Main'
import styled from 'styled-components'
import EmbedPlayer from '../components/UI/atoms/EmbedPlayer'
import VideoInfo from '../components/UI/molecules/VideoPlayerInfo'
import Comments from '../components/UI/molecules/Comments'
import Recommendations from '../components/UI/organisms/Recommendations'
import dateFormatterYT from '../utils/dateFormatter'
import { useNavigate, useParams } from 'react-router-dom'

type item = {
  title: string,
  thumbnail: string,
  channel: string,
  views: number,
  timestamp: string,
  duration: string,
  channelImage: string,
  videoURL: string,
  description?: string
}

export default function Watch() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState<item[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching...')
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=AIzaSyAReqQee66-jmxwFfU2atn33d0aBPMa0Vg`
        );
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData().then(data => {
      console.log(data);
      const item = data.items[0];
      return [
        {
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channel: item.snippet.channelTitle,
          views: item.statistics.viewCount,
          timestamp: dateFormatterYT(item.snippet.publishedAt),
          duration: item.contentDetails.duration,
          channelImage: item.snippet.thumbnails.default.url,
          videoURL: `https://www.youtube.com/watch?v=${item.id}`,
          description: item.snippet.description
        }
      ]
    }).then(data => {
      setVideoData(data);
    })
  }, [id]);
  return (
    <GlobalTemplate>
      <StyledMain>
        <VideoArea>
          <EmbedPlayer height='540px' width='945px' url={videoData[0].videoURL} />
          <VideoInfo
            title={videoData[0].title}
            thumbnail={videoData[0].thumbnail}
            channel={videoData[0].channel}
            views={videoData[0].views}
            timestamp={videoData[0].timestamp}
            duration={videoData[0].duration}
            avatar={videoData[0].channelImage}
            videoURL={videoData[0].videoURL}
            description={videoData[0].description}
          />
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