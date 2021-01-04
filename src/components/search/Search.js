import React, {Component} from 'react';
import './Search.css'

class Search extends Component {

  onFormSubmit = (event) => {
    event.preventDefault(); //What is 'preventDefault'
  }

  render() {
    return (
        <form className="form d-flex"
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
    );
  }
}

export default Search;