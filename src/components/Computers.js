import React, { useEffect } from 'react';
import ImageContainer from './ImageContainer';

const Computers = props => {
  const { title, data, loading, changeQuery } = props;

  // helps set the cats page to the correct search term
  useEffect(() => {
    changeQuery('computers')
  });

  return (
    <ImageContainer query={ title } data={ data } loading={ loading }/>
  )
};

export default Computers;