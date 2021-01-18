import React, {Component} from 'react';
import './RandomGame.css'
import Spinner from "../spinner/Spinner";
import APIService from "../apiService/APIService";
import freePng from './frees.png'
import Error from "../Error/Error";
import {Link} from "react-router-dom";

export default class RandomGame extends Component {

  api = new APIService();

  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {
    this.setState(() => {
      return {
        data,
        loading: false
      }
    })
  };

  getData() {
    this.api.getGameList()
        .then((item) => this.onDataLoaded(item))
        .catch(<Error/>)
  }

  renderCard(data) {

    const titles = data.map(item => item.title)
    const images = data.map(item => item.thumbnail)

    if (Object.keys(data).length > 0) {
      const index = Math.floor(Math.random() * images.length);
      return (
          <div className="col-sm-4 mt-4 size">
            <Link to={`/game-list/${titles[index]}`}>
              <img className="img" src={images[index]} alt={''}/>
              <img className="free" src={freePng} alt=""/>
            </Link>
          </div>
      )
    }
  }

  render() {

    const {data, loading} = this.state;

    if (loading) {
      return <Spinner/>
    }

    return (
        <div className="row">
          {this.renderCard(data)}
          {this.renderCard(data)}
          {this.renderCard(data)}
          {this.renderCard(data)}
          {this.renderCard(data)}
          {this.renderCard(data)}
        </div>
    )

  }
}