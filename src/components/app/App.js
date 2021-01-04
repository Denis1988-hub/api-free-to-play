import React, {Component} from 'react';
import Layout from "../HOC/Layout/Layout";
import Header from "../header/Header";
import Container from "../container/Container";
import APIService from "../apiService/APIService";
import Spinner from "../spinner/Spinner";


class App extends Component {

  api = new APIService();

  state = {
    data: [],
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
        .catch(<Spinner/>)
  }


  render() {
    return (
        <Layout>
          <Header />
          <Container data={this.state.data}/>
        </Layout>
    );
  }
}

export default App;