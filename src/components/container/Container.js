import React, {Component} from 'react';
import './Container.css'
import Spinner from "../spinner/Spinner";
import ItemList from "../itemList/itemList";
import RandomGame from "../randomGame/RandomGame";


export default class Container extends Component {


  showGameList(data) {
    return data.map((item) => <ItemList key={item.id} {...item} />
    )
  }


  render() {

    const {data} = this.props;

    if (!data) {
      return <Spinner/>
    }


    return (
        <div className="container">
          <h1>Best Free to Play Games for PC and Browser in 2021!</h1>
          <p><strong>{data.length}</strong> free-to-play games found in our list!</p>

          <RandomGame/>

          <div className='game-area'>
            {this.showGameList(data)}
          </div>
        </div>
    );
  }
}
