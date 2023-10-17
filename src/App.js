import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// App components
import Cats from './components/Cats';
import Computers from './components/Computers';
import Dogs from './components/Dogs';
import Home from './components/Home';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import Search from './components/Search';
import SearchForm from './components/SearchForm';

// API Key
import apiKey from './config';

const searchCount = 24;
const homepageImage = 'puppies'; // Sets the homepage to a default image set when the page loads

function App() {
  const [ photos, setPhotos ] = useState([]); // Images go here when user does a search
  const [ query, setQuery ] = useState(homepageImage); // Sets the default query on homepage to homepageImage variable
  const [ loading, setLoading ] = useState(true); // Sets the loading message when images are loading

  // Fetches the images from Flickr API
  useEffect(() => {
    let activeFetch = true;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%27${query}%27&per_page=${searchCount}&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        const photos = response.data.photos.photo;
        if (activeFetch) {
          setPhotos(photos);
          setLoading(false);
        }
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data', error);
      });
    return () => { activeFetch = false }
  }, [query]);

  // Helper function for the search query text
  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <Router>
      <div className='container'>
        <SearchForm changeQuery={handleQueryChange} />
        <Nav changeQuery={handleQueryChange} loading={loading} data={ photos } />
        <Routes>
          <Route path='/' element={<Home title='Home Page' loading={loading} query={ homepageImage } data={ photos } changeQuery={handleQueryChange} />} />
          <Route path='/search/:query' element={<Search loading={loading} data={ photos } changeQuery={handleQueryChange} />}/>
          <Route path='/search/cats' element={<Cats title='Cats' loading={loading} data={ photos } changeQuery={handleQueryChange} />}/>
          <Route path='/search/dogs' element={<Dogs title='Dogs' loading={loading} data={ photos } changeQuery={handleQueryChange} />}/>
          <Route path='/search/computers' element={<Computers title='Computers' loading={loading} data={ photos } changeQuery={handleQueryChange} />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
