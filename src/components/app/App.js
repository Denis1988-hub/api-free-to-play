import React, {Component} from 'react';
import Layout from "../HOC/Layout/Layout";
import Header from "../header/Header";
import Container from "../container/Container";


class App extends Component {
  render() {
    return (
        <Layout>
          <Header />
          <Container />
        </Layout>
    );
  }
}

export default App;