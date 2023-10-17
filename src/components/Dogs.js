import React, { useEffect } from 'react';
import ImageContainer from './ImageContainer';

const Dogs = props => {
  const { title, data, loading, changeQuery } = props;

  // helps set the cats page to the correct search term
  useEffect(() => {
    changeQuery('dogs')
  });

  return (
    <ImageContainer query={ title } data={ data } loading={ loading }/>
  )
};

export default Dogs;