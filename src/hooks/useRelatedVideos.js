import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useRelatedVideos = (query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (search) => {
    setIsLoading(true);

    try{
      const response = await youtube.get('/search', {
        params: {
          relatedToVideoId: search,
          type: 'video',
          part: 'snippet'
        }
      })
      console.log(response.data.items);
      setVideos(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }    
  }

  useEffect(()=>{
    handleSubmit(query)
  }, [query])

  return [isLoading, videos];
}

export default useRelatedVideos;