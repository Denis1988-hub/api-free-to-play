import React, {Component} from 'react';
import Logo from "../logo/Logo";
import './Nav.css'
import Search from "../search/Search";


class Nav extends Component {


  render() {

    return (

        <nav className={"navbar navbar-expand navbar-dark"}>
           <div className="collapse navbar-collapse" id="navbarColor02">

             <Logo/>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" href="#">Games List</a>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" href="#">Special Offers</a>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link" href="#">Top Games</a>
              </li>
            </ul>
            <Search onSearchItems={this.props.onSearchItems}/>
          </div>
        </nav>
    );
  }
}

export default Nav;