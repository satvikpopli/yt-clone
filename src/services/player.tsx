const fetchData = async (id: string) => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=AIzaSyAReqQee66-jmxwFfU2atn33d0aBPMa0Vg`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchData;