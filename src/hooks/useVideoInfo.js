import { useState, useEffect, useCallback } from 'react';
import youtube from '../apis/youtube';

const useVideoInfo = (videoID) => {
  const [videoTitle, setTitle] = useState('');
  const [videoDescription, setDescription] = useState('');
  const [thumb, setThumb] = useState('');

  const parseData = (video) => {
    const { title } = video;
    const { description } = video;
    const newThumb = video.thumbnails.medium.url;

    return [title, description, newThumb];
  };

  const handleSubmit = useCallback(async (videoId) => {
    const response = await youtube.get('/videos', {
      params: {
        id: videoId,
      },
    });
    if (response.data.items[0]) {
      const [respTitle, respDescription, respThumb] = parseData(
        response.data.items[0].snippet
      );
      setTitle(respTitle);
      setDescription(respDescription);
      setThumb(respThumb);
    } else {
      setTitle('');
      setDescription('');
      setThumb({});
    }
  }, []);

  useEffect(() => {
    if (videoID) handleSubmit(videoID);
  }, [videoID, handleSubmit]);

  return [videoTitle, videoDescription, thumb];
};

export default useVideoInfo;
