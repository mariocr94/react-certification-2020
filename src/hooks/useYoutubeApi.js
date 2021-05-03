import { useState, useEffect, useCallback } from 'react';
import youtube from '../apis/youtube';

const useYoutubeApi = (query) => {
  const [videos, setVideos] = useState([]);

  const handleSubmit = useCallback(async (search) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: search,
          type: 'video',
        },
      });
      const videoIds = response.data.items.map((item) => item.id.videoId);
      setVideos(videoIds);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (query) handleSubmit(query);
  }, [query, handleSubmit]);

  return videos;
};

export default useYoutubeApi;
