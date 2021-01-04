import React, {Component} from 'react';
import './itemList.css'
import IconGenre from "../iconGenre/IconGenre";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class ItemList extends Component {

  state = {
    listItem: {}
  };

  toStraightString = (str) => {
    const maxSize = 40;
    const dots = '........';
    return str.substr(0, maxSize) + dots;
  };

  render() {

    const {
      developer, ftgProfileUrl, gameUrl, id, genre,
      platform, publisher, releaseDate, shortDescription,
      thumbnail, title
    } = this.props;



    const onCutDescription = this.toStraightString(shortDescription)


    return (

        <div className="col-xl-3 col-md-4 game-card video-card">

          <div className="card-group">
            <div className="card item">

              <LazyLoadImage
                  effect="blur"
                  src={thumbnail}
                  delayTime={200}
              />
              <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text"><small>{onCutDescription}</small></p>
                <p className="card-text icon">
                  <IconGenre platform={platform} genre={genre}/>
                </p>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default ItemList;