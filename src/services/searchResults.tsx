const fetchData = async (id : string) => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${id}&maxResults=50&key=AIzaSyAReqQee66-jmxwFfU2atn33d0aBPMa0Vg`
        );
        const data = await response.json();
        const videoIds = data.items.map((video: any) => video.id.videoId);
        const videoDetailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(
                ','
            )}&key=AIzaSyAZ5OQCgV_yi1U69TSlFtxJAk1QrFXlcOk`
        );
        const videoDetailsData = await videoDetailsResponse.json();
        console.log(videoDetailsData);
        const videosWithDetails = data.items.map((video: any) => ({
            ...video,
            statistics: videoDetailsData.items.find((item: any) => item.id === video.id.videoId).statistics,
            contentDetails: videoDetailsData.items.find((item: any) => item.id === video.id.videoId).contentDetails,
        }));
        return videosWithDetails;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchData;