import React, {Component} from 'react';
import Layout from "../HOC/Layout/Layout";
import Header from "../header/Header";
import Container from "../container/Container";
import APIService from "../apiService/APIService";
import Error from "../Error/Error";


class App extends Component {

  api = new APIService();

  state = {
    data: [],
    query: ''
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
    if (data) {
      return data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) > -1)

    }
  };

  onSearchItems = (query) => {
    this.setState({ query })
  };


  render() {

    const { data, query } = this.state;
    const visibleItems = this.filter(data, query);

    return (
        <Layout>
          <Header onSearchItems={this.onSearchItems}/>
          <Container data={visibleItems}/>
        </Layout>
    );
  }
}

export default App;