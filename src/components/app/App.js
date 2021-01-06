import React, {Component} from 'react';
import Layout from "../HOC/Layout/Layout";
import Header from "../header/Header";
import Container from "../container/Container";
import APIService from "../apiService/APIService";
import Error from "../Error/Error";
import './App.css'
import Spinner from "../spinner/Spinner";


class App extends Component {

    api = new APIService();

    state = {
        data: [],
        query: '',
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

        const {data, query} = this.state;
        const visibleItems = this.filter(data, query);

        if (Object.keys(data).length === 0) {
            return <Spinner/>
        } else {
            const container = visibleItems.length > 0
                ? <Container data={visibleItems}/>
                : this.isEmpty()

            console.log(container)
            return (
                <Layout>
                    <Header onSearchItems={this.onSearchItems}/>
                    {container}
                </Layout>
            );
        }
    }
}

export default App;