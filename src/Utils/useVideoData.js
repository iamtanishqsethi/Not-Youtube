import { useEffect, useState } from "react";

const useVideoData = (videoId) => {
    const [data, setData] = useState(null);

    const getVideoData = async () => {
        if (!videoId) return;
        //API key 2
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_KEY2}`);
            const json = await response.json();
            setData(json?.items[0] || null);
        } catch (error) {
            console.error("Error fetching video data:", error);
            setData(null);
        }
    };

    useEffect(() => {
        getVideoData();
    }, [videoId]);

    return data;
};

export default useVideoData;