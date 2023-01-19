import React from 'react';
import './menu.css';
import friendIcon from './friend.png';

const menu = () => {

  return(
    <div>
     <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Name</h2>
      </div>

      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Friends</h2>
      </div>

      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Groups</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Saved</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Most Recent</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Marketplace</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Watch</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Memories</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Pages</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>News</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>Events</h2>
      </div>
      <div className="menu-item">
        <img src={friendIcon} alt="friend icon" />
        <h2>See more</h2>
      </div>

      
    </div>
  )
}

export default menu;