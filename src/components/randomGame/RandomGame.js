import React, {Component} from 'react';
import './RandomGame.css'
import Spinner from "../spinner/Spinner";

class RandomGame extends Component {

  renderCard(image) {
    if (Object.keys(image).length !== 0) {
      return (
          <div className="card size">
            <img className="card-img-top" src={image.thumbnail} alt={''}/>
          </div>)
    } else {
      return (
          <Spinner/>
      )
    }
  }

  render() {

    const {fGame, sGame} = this.props;

    return (

        <div className="d-flex jc-sb mb-3 mt-3">
          {this.renderCard(fGame)}
          {this.renderCard(sGame)}
        </div>
    );
  }
}

export default RandomGame;