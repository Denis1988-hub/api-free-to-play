import React, {Component} from 'react';
import Logo from "../logo/Logo";
import './Nav.css'
import Search from "../search/Search";
import {NavLink} from "react-router-dom";


class Nav extends Component {


  render() {

    return (

        <nav className={"navbar navbar-expand navbar-dark"}>
           <div className="collapse navbar-collapse" id="navbarColor02">

             <Logo/>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink className="nav-link" to="/game-list">Games List</NavLink>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink className="nav-link" to="/special">Special Offers</NavLink>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink className="nav-link" to="top-games">Top Games</NavLink>
              </li>
            </ul>
            <Search onSearchItems={this.props.onSearchItems}/>
          </div>
        </nav>
    );
  }
}

export default Nav;