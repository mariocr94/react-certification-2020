import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useYoutubeApi = (query) => {
  const [videos, setVideos] = useState([]);


  const handleSubmit = async (search) => {
    const response = await youtube.get('/search', {
      params: {
        q: search
      }
    })
    console.log(response.data);
    setVideos(response.data.items);
  }

  useEffect(()=>{
    handleSubmit(query)
  }, [query])

  return [videos];
}

export default useYoutubeApi;