import React, {Component} from 'react';
import './Search.css'

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
    this.props.onSearchItems(this.state.query)
  };

  render() {

    return (
        <form className="form d-flex"
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <input className="form-control me-2" type="search" placeholder="Search for...."
            onChange={this.handleInputChange}
          />
          <button className="btn btn-outline-primary" type="submit"
            onClick={() => this.onHandleClick()}
          >Search</button>
        </form>
    );
  }
}

export default Search;