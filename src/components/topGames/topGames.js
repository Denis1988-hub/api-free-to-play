import React from 'react';
import './topGames.css';


const TopGames = ({ num, title, thumbnail }) => {
  return (
      <div className="row cls">
        <span className="num">{num}</span>
        <img className="thumbnail"
             src={thumbnail}  alt={title} />
        <div className="about">
          <h3>{title}</h3>
          <p>
            <i className="fas fa-award mr-2" />
            {title} is currenty one ofthe most-played Free To Play games in January 2021.
          </p>
        </div>
      </div>
  );
};

export default TopGames;