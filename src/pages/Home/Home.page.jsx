import React, { useRef} from 'react';
import VideoCards from '../../components/VideoCards';
import './Home.styles.css';
import {useAppContext} from '../../context/AppProvider';


function HomePage() {
  const { state } = useAppContext();
  const { search } = state;


  const sectionRef = useRef(null);

  return (
      <section className="homepage" ref={sectionRef}>
        {search === "" ? (
          <h2>Look for something!</h2>
        ) : (           
          <VideoCards key="0" videoId={search} />
        )}
      </section>
  );
}

export default HomePage;
