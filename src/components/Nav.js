import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  const { changeQuery } = props;
  return (
    <nav className='main-nav'>
      <ul>
        <li><NavLink to='/search/cats' onClick={() => changeQuery('cats')}>Cats</NavLink></li>
        <li><NavLink to='/search/dogs' onClick={() => changeQuery('dogs')}>Dogs</NavLink></li>
        <li><NavLink to='/search/computers' onClick={() => changeQuery('computers')}>Computers</NavLink></li>
      </ul>
    </nav>
  )
};

export default Nav;