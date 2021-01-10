import React, {Component} from 'react';
import Layout from "../Layout/Layout";
import Header from "../header/Header";
import Container from "../container/Container";
import APIService from "../apiService/APIService";
import Error from "../Error/Error";
import './App.css'
import GameDetails from "../gameDetails/GameDetails";
import {BrowserRouter as Router, Route} from "react-router-dom";
import RandomGame from "../randomGame/RandomGame";
import TopGames from "../topGames/topGames";


class App extends Component {

  api = new APIService();

  state = {
    data: [],
    query: '',
    selectedGame: null
  };

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

  filter = (data, query) => {
    if (data) return data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
  };

  onSearchItems = (query) => {
    this.setState({query})
  };

  onHandlerCardClick = (id) => {
    const {data} = this.state;
    const item = data.find((item) => item.id === id);
    this.setState(() => {
      return {
        selectedGame: item
      }
    })
  };


  render() {

    const {data, query, selectedGame} = this.state;
    const visibleItems = this.filter(data, query);

    return (
        <Router>
          <Layout>
            <Header onSearchItems={this.onSearchItems}/>
            <div className="container">
              <h1 className="mb-3">Best Free to Play Games for PC and Browser in 2021!</h1>

              <Route path='/' exact={'/'} render={() => <RandomGame/>}/>

              <Route path='/game-list' render={() =>
                  <Container data={visibleItems}
                             onHandlerCardClick={this.onHandlerCardClick}/>}
              />

              <Route path='/game-details' render={() => <GameDetails getData={selectedGame}/>}/>
              <Route path='/top-games' render={() => <TopGames/>}/>

            </div>
          </Layout>
        </Router>

    );
  }
}

export default App;

