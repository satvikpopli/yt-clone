async function getFeed() {
    const response = await fetch(`${process.env.REACT_APP_YOUTUBE_BASE_URL}/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    const data = await response.json();
    return data;
}

export default getFeed;