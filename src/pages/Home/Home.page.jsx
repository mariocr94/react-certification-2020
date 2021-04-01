import React, { useRef, useState } from 'react';
import  Header  from '../../components/Header';
import VideoCards from '../../components/VideoCards';
import './Home.styles.css';


function HomePage() {
  const [search, setSearch] = useState('');

  const updateSearch = (childData) => {
    setSearch(childData);
  }

  const sectionRef = useRef(null);

  return (
      <section className="homepage" ref={sectionRef}>
        <Header callBack={updateSearch}/>
        <h1>React Bootcamp 2021</h1>
          {search === "" ? (
            <h2>Look for something!</h2>
          ) : (
            <VideoCards query={search} />
          )}
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </section>
  );
}

export default HomePage;
