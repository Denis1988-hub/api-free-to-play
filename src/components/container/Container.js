import React, {Component} from 'react';
import './Container.css'
import Spinner from "../spinner/Spinner";
import ItemList from "../itemList/itemList";


export default class Container extends Component {


  showGameList(data) {
    return data.map((item) => <ItemList
            key={item.id}
            {...item}
            onHandlerCardClick={() => this.props.onHandlerCardClick(item.id)}

        />
    )
  }

  render() {

    const {data} = this.props;

    if (!data) {
      return <Spinner/>
    }

    return (
          <>
            <p><strong>{data.length}</strong> free-to-play games found in our list!</p>
            <div className='game-area'>
              {this.showGameList(data)}
            </div>
          </>
    );
  }
}
