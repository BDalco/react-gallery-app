import React, { useEffect } from 'react';
import ImageContainer from './ImageContainer';

const Cats = props => {
  const { title, data, loading, changeQuery } = props;

  // helps set the cats page to the correct search term
  useEffect(() => {
    changeQuery('cats')
  });

  return (
    <ImageContainer query={ title } data={ data } loading={ loading }/>
  )
};

export default Cats;