import {useState, useEffect, useCallback} from 'react';
import youtube from '../apis/youtube';

const useVideoInfo = (videoID) => { 
    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const parseData = (video) => {
    const title = video.title;
    const description = video.description;

    return [title, description];
  };

  const handleSubmit = useCallback( async (videoID) => {
    const response = await youtube.get('/videos', {
      params: {
        id: videoID
      }
    })
    
    const [title, description] = parseData(response.data.items[0].snippet);
    setTitle(title);
    setDescription(description);
  }, []);

  useEffect(()=>{
    handleSubmit(videoID)
  }, [videoID, handleSubmit]);

  return [title, description];
  
}

export default useVideoInfo;