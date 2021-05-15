import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
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
    <>
      <h1 className="text-info mb-5" >Joke Generator!</h1>
        <div className='App'>
          <h2>{singleJoke.setup}</h2>
          <p>{showPunchline ? singleJoke.punchline : ''}</p>
          <Button color="info" className="mt-auto" onClick={handleClick}>
            {showPunchline ? 'Get another joke' : 'Get Punchline'}
          </Button>
        </div>
    </>
  );
}

export default App;
