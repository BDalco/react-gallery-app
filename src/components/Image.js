import React from 'react';

const Image = ( { image } ) => {
  const { id, secret, server } = image;
  const imageURL = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
  return (
    <li>
      <img src={ imageURL } alt='' />
    </li>
  )
}

export default Image;