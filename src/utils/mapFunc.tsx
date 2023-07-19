import dateFormatterYT from './dateFormatter';

const func = ({ snippet, statistics, contentDetails, id }: any) => {
    return {
        title: snippet.title,
        thumbnail: snippet.thumbnails.medium.url,
        channel: snippet.channelTitle,
        views: parseInt(statistics.viewCount),
        timestamp: dateFormatterYT(snippet.publishedAt),
        duration: contentDetails.duration,
        avatar: snippet.thumbnails.default.url,
        videoURL: `https://www.youtube.com/embed/${id}`,
        description: snippet.description
    }
}

export default func;