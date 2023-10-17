import React, { useEffect } from 'react';
import ImageContainer from './ImageContainer';

const Home = props => {

  const { title, data, loading, changeQuery, query } = props;
  
  // helps set the cats page to the correct search term from app.js
  useEffect(() => {
    changeQuery(query)
  });

  return (
    <ImageContainer query={ title } data={ data } loading={ loading }/>
  )
};

export default Home;