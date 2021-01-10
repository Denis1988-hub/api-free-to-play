import React, {Component} from 'react';
import style from './Layout.module.css'

class Layout extends Component {
  render() {
    return (
        <div className={style.layout}>
          <div className={style.main}>
            { this.props.children }
          </div>
        </div>
    );
  }
}

export default Layout;