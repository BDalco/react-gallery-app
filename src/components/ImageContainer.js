import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const ImageContainer = props => {
  const { data, query, loading } = props;
  
  // gets all of the images and puts them into the Image component
  let images = data.map( image => 
    <Image image={image} key={image.id}/> 
  );

  // Checks if the images array has results
  const hasImages = images.length;

  return (
    <div className='photo-container'>
      {loading ? (
        <h2>Loading...</h2> // Renders a Loading... message while fetching the images
      ) : (
        <>
          <h2>{ query }</h2>
          <ul>
            { hasImages ?
              images : null
            }
            { !hasImages &&
              <NotFound /> // If there are no images renders the NotFound component
            }
          </ul>
        </>
      )}
    </div>
  )
}

export default ImageContainer;