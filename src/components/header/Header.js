import React, {Component} from 'react';
import './Header..css'
import Nav from "../nav/Nav";

class Header extends Component {

  render() {
    return (
        <div className={'header'}>
          <div className={'header-content'}>
            <Nav onSearchItems={this.props.onSearchItems}/>
          </div>
        </div>
  )
  }
  }

  export default Header;