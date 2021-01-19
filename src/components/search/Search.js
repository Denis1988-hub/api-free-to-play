import React, {Component} from 'react';
import './Search.css'
import {Link} from "react-router-dom";

class Search extends Component {

  state = {
    query: '',
  };


  onFormSubmit = (e) => {
    e.preventDefault();
  };

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    })
  };

  onHandleClick = () => {
    this.props.onSearchItems(this.state.query);
  /*  this.setState({
      query: ''
    })*/
  };



  render() {

    return (
        <form className="form d-flex"
              onSubmit={(e) => this.onFormSubmit(e)}
        >
          <input className="form-control me-2" type="search" placeholder="Search for...."
                 value={this.state.query}
                 onChange={this.handleInputChange}
          />
          <Link to={'/game-list'}>
            <button className="btn btn-outline-primary" type="submit"
                    onClick={() => this.onHandleClick()}
            >Search
            </button>
          </Link>
        </form>
    );
  }
}

export default Search;