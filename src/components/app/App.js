import React, {Component} from 'react';
import Layout from "../Layout/Layout";
import Header from "../header/Header";
import Container from "../container/Container";
import APIService from "../apiService/APIService";
import Error from "../Error/Error";
import './App.css'
import GameDetails from "../gameDetails/GameDetails";
import {Route, Switch} from "react-router-dom";
import RandomGame from "../randomGame/RandomGame";
import TopGames from "../topGames/topGames";
import Spinner from "../spinner/Spinner";


function loadingData (loading, comp) {
    if (loading) {
        return <Spinner />
    } else  {
        return comp
    }
}


class App extends Component {

    api = new APIService();

    state = {
        data: [],
        query: '',
        loading: true
    };

    componentDidMount() {
        this.updateData();
    }

    onListLoaded = (data) => {
        this.setState({
            data,
            loading: false
        });

    };

    updateData() {
        this.api.getGameList()
            .then(list => this.onListLoaded(list))
            .catch(<Error/>)
    }

    filter = (data, query) => {
        return data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
    };

    onSearchItems = (query) => {
        this.setState({query})
    };

    getRandomGame = (data) => {
        const index = Math.floor(Math.random() * 10);
        return data[index]
    };

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

        const {data, query, loading} = this.state;
        const visibleItems = this.filter(data, query);

        return (
            <Switch>
                <Layout>
                    <Header onSearchItems={this.onSearchItems}/>
                    <div className="container">
                        <h1 className="mb-3">Best Free to Play Games for PC and Browser in 2021!</h1>
                        <Route exact path='/' render={() => <RandomGame/>}/>

                        <Route exact path='/game-list' render={() =>
                             loadingData(loading, <Container data={visibleItems}/>)
                        }
                        />

                        <Route path='/game-list/:title' render={({match}) => {
                            const {title} = match.params;
                            const index = data.findIndex(item => item.title === title);
                            return <GameDetails getData={data[index]}/>
                        }}/>

                        <Route path='/top-games' render={() => {
                            const randomGame = this.getRandomGame(data);
                            console.log(randomGame)
                        }}/>

                    </div>
                </Layout>
            </Switch>
        );
    }
}

export default App;

