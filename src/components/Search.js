import React, { useEffect } from 'react';
import ImageContainer from './ImageContainer';
import { useParams } from "react-router-dom";

const Search = props => {
  const { data, loading, changeQuery } = props;

  let { query } = useParams(); // Gets the query from the search to use when the user goes back

  useEffect(() => {
    changeQuery(query)
  });

  return (
    <ImageContainer query={ query } data={ data } loading={ loading }/>
  )
};

export default Search;