import React from 'react';
import style from './Logo.module.css'
import logoPng from './free.png'

const Logo = () => {
  return (
      <>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="/">
          <img className={style.logoPng} src={logoPng} alt=""/>
          <span className={style.logo}>
            -𝓉♡-𝒫𝓁𝒶𝓎
          </span>
      </a>
</>



  );
};

export default Logo;