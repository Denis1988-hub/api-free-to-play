import React, {Component} from 'react';
import './Container.css'
import Spinner from "../spinner/Spinner";
import ItemList from "../itemList/itemList";
import RandomGame from "../randomGame/RandomGame";


export default class Container extends Component {


  showGameList(data) {
    return data.map((item) => <ItemList
            key={item.id}
            {...item}
            onHandlerCardClick={() => this.props.onHandlerCardClick(item.id)}

        />
    )
  }

  isEmpty() {
    return (
        <div className="empty">
          <h1>Nothing found...</h1>
          <p className="lead">
            Refresh page or click the button
          </p>
          <button className="btn btn-secondary"
                  onClick={() => document.location.reload()}
          >
            Return
          </button>
        </div>
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
