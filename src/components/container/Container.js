import React, {Component} from 'react';
import './Container.css'
import Spinner from "../spinner/Spinner";
import ItemList from "../itemList/itemList";
import APIService from "../apiService/APIService";
import Error from "../Error/Error";


class Container extends Component {

    api = new APIService();

    state = {
        data: []
    }

    componentDidMount() {
        this.updateData();
    }

    onListLoaded = (data) => {
        this.setState({
            data,
        });

    };

    updateData() {
        this.api.getGameList()
            .then(list => this.onListLoaded(list))
            .catch(<Error/>)
    }


    showGameList = (data) => {
        return data.map((item) =>
            <ItemList
                key={item.id}
                {...item}
            />
        )
    }

    render() {

        const { data } = this.state

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

export default Container;

