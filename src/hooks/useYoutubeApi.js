import {useState, useEffect, useCallback} from 'react';
import youtube from '../apis/youtube';

const useYoutubeApi = (query) => {
  const [videos, setVideos] = useState([]);

  const handleSubmit = useCallback(async (query) => {
    
    try{
      const response = await youtube.get('/search', {
      params: {
        q: query,
        type: 'video' 
      }
      })
      setVideos(response.data.items);
    } catch(e){
      console.log(e);
    }
    
  }, [])

  useEffect(()=>{
    handleSubmit(query)
  }, [query, handleSubmit])

  return [videos];
  
}

export default useYoutubeApi;