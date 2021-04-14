import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useYoutubeApi = (query) => {
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (search) => {
    
    try{
      const response = await youtube.get('/search', {
      params: {
        q: search,
        type: 'video' 
      }
      })
      setVideos(response.data.items);
    } catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{
    handleSubmit(query)
  }, [query])

  return [videos];
  
}

export default useYoutubeApi;