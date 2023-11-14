import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store =>store.app.isMenuOpen);

// Early Return
  if(!isMenuOpen) return null;

  return (
    <div className='w-48 shadow-2xl '>
    <Link to="/"><h1 className='font-bold m-2 cursor-pointer'>Home</h1></Link>  
      <ul>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Your Videos</li>
      </ul>
      <h2 className='font-bold m-2'>Explore</h2>
      <ul>
        <li>Music</li>
        <li>videos</li>
        <li>Mixes</li>
        <li>Trailers</li>
        <li>Live</li>
        <li>Trending</li>
      </ul>
    </div>
  )
}

export default SideBar