import React, {Component} from 'react';
import './RandomGame.css'
import Spinner from "../spinner/Spinner";
import APIService from "../apiService/APIService";
import freePng from './frees.png'
import Error from "../Error/Error";

export default class RandomGame extends Component {

  api = new APIService();

  state = {
    images: []
  };

  componentDidMount() {
      this.getData()
  }



  onImageLoaded = (images) => {
    const img = images.map(img => img.thumbnail);
    this.setState(() => {
      return {
        images: img
      }

    })
  };

  getData() {
    this.api.getGameList()
        .then((item) => this.onImageLoaded(item))
        .catch(<Error/>)
  }

  renderCard(image) {
    if (Object.keys(image).length !== 0) {
      const index = Math.floor(Math.random() * image.length);
      return (

            <div className="card mb-4 size">
              <img className="card-img-top" src={image[index]} alt={''}/>
              <img className="free" src={freePng} alt=""/>

          </div>)
    } else {
      return (
          <Spinner/>
      )
    }

  }

  renderContent(images) {
    return (
        <div className="row random-container">
          {this.renderCard(images)}
          {this.renderCard(images)}
          {this.renderCard(images)}
          {this.renderCard(images)}
        </div>
    )
  }


  render() {

  const {images} = this.state;

  return this.renderContent(images)

  }
  }