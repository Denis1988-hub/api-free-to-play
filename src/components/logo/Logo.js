import React from 'react';
import style from './Logo.module.css'

const Logo = () => {
  return (
      <>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="/">
          <span className={style.logo}>
            𝐹𝓇𝑒𝑒-𝓉♡-𝒫𝓁𝒶𝓎
          </span>
      </a>
</>



  );
};

export default Logo;