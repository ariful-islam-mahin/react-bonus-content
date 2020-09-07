import React, { useState, useEffect } from 'react';
import './App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [loveColor, setLoveColor] = useState('');

  const [RandomUser, setRandomUsers] = useState({});
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUsers(data.results[0]))
  }, [])

  // console.log(RandomUser.name && RandomUser.name);
  
  return (
    <div className='App'>
      <ThumbUpIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor} style={{ fontSize: 80 }}></ThumbUpIcon>
      <FavoriteIcon onClick={() => setLoveColor(loveColor ? '' : 'secondary')} color={loveColor} style={{ fontSize: 80}}></FavoriteIcon>

      <h2>Random User Name: {RandomUser.name && RandomUser.name.first} {RandomUser.name && RandomUser.name.last}</h2>

    </div>
  );
}

export default App;
