import React, { useState, useEffect } from 'react';
import './App.scss';
import getJoke from '../helpers/data/jokeData';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setPunchline] = useState(false);

  const handleClick = () => {
    if (showPunchline) {
      setPunchline(false);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    } else {
      setPunchline(true);
    }
  };

  useEffect(() => {
    getJoke()
      .then((jokes) => {
        setAllJokes(jokes);
        setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
      });
  }, []);

  return (
    <div className='App'>
      <h2>{singleJoke.setup}</h2>
      <p>{showPunchline ? singleJoke.punchline : ''}</p>
      <button onClick={handleClick}>
        {showPunchline ? 'Get another joke' : 'Get Punchline'}
      </button>
    </div>
  );
}

export default App;
