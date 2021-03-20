import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import  Header  from '../../components/Header';
import VideoCards from '../../components/VideoCards';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';


function HomePage() {
  const [search, setSearch] = useState("");

  const updateSearch = (childData) => {
    setSearch(childData);
  }

  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      <Header callBack={updateSearch} />
      <section className="homepage" ref={sectionRef}>
        <h1>React Bootcamp 2021</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <div>
            <VideoCards filter={search}/>
          </div>
        )}
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </section>
    </>
  );
}

export default HomePage;
