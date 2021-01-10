import React from 'react';
import style from './Logo.module.css'
import logoPng from './free.png'
import {NavLink} from "react-router-dom";

const Logo = () => {
  return (
      <NavLink className="navbar-brand" to="/" exact={'/'}>
          <img className={style.logoPng} src={logoPng} alt=""/>
          <span className={style.logo}>
            -𝓉♡-𝒫𝓁𝒶𝓎
          </span>
      </NavLink>

  );
};

export default Logo;