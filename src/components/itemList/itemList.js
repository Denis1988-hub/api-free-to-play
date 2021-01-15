import React from 'react';
import './itemList.css'
import IconGenre from "../iconGenre/IconGenre";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {NavLink} from "react-router-dom";




const ItemList = (props) => {

  const {
    id, genre,
    platform, shortDescription,
    thumbnail, title,
  } = props;

  const toStraightString = (str) => {
    const maxSize = 40;
    const dots = '........';
    return str.substr(0, maxSize) + dots;
  };

  const onCutDescription = toStraightString(shortDescription);

  return (
      <div className="col-xl-3 col-md-4 game-card">
        <div className="card-group">
          <NavLink className="link" to={`/game-list/${title}`}>
            <div className="card item"
            >
              <LazyLoadImage
                  effect="blur"
                  src={thumbnail}
                  delayTime={200}
              />
              <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text"><small>{onCutDescription}</small></p>
                <p className="card-text">
                  <IconGenre platform={platform}/>
                  <span className="badge badge-secondary">{genre.toUpperCase()}</span>
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
  );
};

export default ItemList;