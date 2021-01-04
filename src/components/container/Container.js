import React, {Component} from 'react';
import './Container.css'
import Spinner from "../spinner/Spinner";
import ItemList from "../itemList/itemList";
import APIService from "../apiService/APIService";
import RandomGame from "../randomGame/RandomGame";

export default class Container extends Component {

  api = new APIService();

  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    this.updateData();
  }


  onListLoaded = (data) => {
    this.setState({
      data,
      isLoading: false
    })
  };

  updateData() {
    this.api.getGameList()
        .then(game => this.onListLoaded(game))
        .catch(<Spinner/>)
  }

  randomPicture() {
    const id = Math.floor(Math.random() * 45 + 1);
    return {...this.state.data.find(el => el.id === id)}
  }

  random2Picture() {
    const id = Math.floor(Math.random() * 45 + 1);
    return {...this.state.data.find(el => el.id === id)}
  }


  render() {

    const {data, isLoading} = this.state;

    const content = isLoading ? <Spinner/> : showGameList(data);

    const fGame = this.randomPicture();
    const sGame = this.random2Picture();

    console.log(this.state.id)

    return (
        <div className="container">
          <h1>Best Free to Play Games for PC and Browser in 2021!</h1>
          <p><strong>{data.length}</strong> free-to-play games found in our list!</p>
          <RandomGame fGame={fGame} sGame={sGame}/>

          <div className='game-area'>
            {content}
          </div>
        </div>
    );
  }
}

function showGameList(data) {
  return data.map((item) => <ItemList key={item.id} {...item} />
  )
}