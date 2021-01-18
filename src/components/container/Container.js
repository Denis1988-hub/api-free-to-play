import React, {Component} from 'react';
import './Container.css'
import ItemList from "../itemList/itemList";
import APIService from "../apiService/APIService";


class Container extends Component {

    api = new APIService();


    showGameList = (data) => {
        return data.map((item) =>
            <ItemList
                key={item.id}
                {...item}
            />
        )
    };

    render() {

        const { data } = this.props;

        return (
            <>
                <p className="par"><span className="num">{data.length}</span> free-to-play games found in our list!</p>
                <div className='game-area'>
                    {
                        this.showGameList(data)
                    }
                </div>
            </>
        );
    }
}

export default Container;

