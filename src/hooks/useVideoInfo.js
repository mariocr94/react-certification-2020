import {useState, useEffect, useCallback} from 'react';
import youtube from '../apis/youtube';

const useVideoInfo = (videoID) => { 
    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumb, setThumb] = useState("");
  
  const parseData = (video) => {
    const title = video.title;
    const description = video.description;
    const thumb = video.thumbnails.medium.url;

    return [title, description, thumb];
  };

  const handleSubmit = useCallback( async (videoID) => {
    const response = await youtube.get('/videos', {
      params: {
        id: videoID
      }
    })
    if(response.data.items[0]) {
      const [title, description, thumb] = parseData(response.data.items[0].snippet);
      setTitle(title);
      setDescription(description);
      setThumb(thumb);
    }else{
      setTitle('');
      setDescription('');
      setThumb({});
    }
  }, []);

  useEffect(()=>{
    handleSubmit(videoID)
  }, [videoID, handleSubmit]);

  return [title, description, thumb];
  
}

export default useVideoInfo;