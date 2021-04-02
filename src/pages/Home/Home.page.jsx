import React, { useRef, useState } from 'react';
import  Header  from '../../components/Header';
import VideoView from '../../components/VideoView';
import VideoCards from '../../components/VideoCards';
import './Home.styles.css';


function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const updateSearch = (childData) => {
    setSearch(childData);
    setSelectedVideo("");
    
  }

  const handleSelectedVideo = (childData) => {
    setSelectedVideo(childData);
  }

  const reset = () => {
    setSelectedVideo("");
  }

  const sectionRef = useRef(null);

  return (
      <section className="homepage" ref={sectionRef}>
        <Header callBack={updateSearch} callBackReset={reset}/>
          {search === "" && selectedVideo === "" ? (
            <h2>Look for something!</h2>
          ) : [
              (selectedVideo === "" ? (
                <VideoCards key="0" videoId={search} callBack={handleSelectedVideo}/>
              ) : (
                <VideoView key="1" videoId={selectedVideo} callBack={handleSelectedVideo}/>
              ))
          ]}
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </section>
  );
}

export default HomePage;
