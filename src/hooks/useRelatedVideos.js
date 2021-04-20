import { useState, useEffect, useCallback } from 'react';
import youtube from '../apis/youtube';

const useRelatedVideos = (query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleSubmit = useCallback(async (query) => {
    setIsLoading(true);

    try {
      const response = await youtube.get('/search', {
        params: {
          relatedToVideoId: query,
          type: 'video',
          part: 'snippet',
        },
      });

      setVideos(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleSubmit(query);
  }, [query, handleSubmit]);

  return [isLoading, videos];
};

export default useRelatedVideos;
