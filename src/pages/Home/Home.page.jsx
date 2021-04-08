import React, { useRef, useState} from 'react';
import VideoView from '../../components/VideoView';
import VideoCards from '../../components/VideoCards';
import './Home.styles.css';
import {useAppContext} from '../../context/AppProvider';


function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const { state } = useAppContext();
  const { search } = state;
  const handleSelectedVideo = (childData) => {
    setSelectedVideo(childData);
  }


  const sectionRef = useRef(null);

  return (
      <section className="homepage" ref={sectionRef}>
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
