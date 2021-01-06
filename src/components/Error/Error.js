import React from 'react';
import './Error.css'

const Error = () => {
  return (
      <div className="error">
        <h1>404 Error Page</h1>
        <p className="zoom-area">May be is lost....?</p>
        <section className="error-container">
          <span>4</span>
          <span><span className="screen-reader-text">0</span></span>
          <span>4</span>
        </section>
      </div>
  );
};

export default Error;