import React from 'react';
import './IconGenre.css'

const IconGenre = ({ platform, genre }) => {

  const genreTolowerCase = genre.toLowerCase()

  if (platform === 'Web Browser') {
    return <i className="fab fa-firefox-browser">
      <small className="text-muted">
        <span>{platform}</span>
        <span className="badge">{genreTolowerCase}</span>
      </small>
    </i>
  } else if (platform === 'PC (Windows)') {
    return <i className="fab fa-windows">
      <small className="text-muted">
        <span>{platform}</span>
        <span className="badge">{genreTolowerCase}</span>
      </small>
    </i>
  } else {
    return <>
      <i className="fab fa-firefox-browser" />
      <i className="fab fa-windows" />
      <small className="text-muted">
        <span>{platform}</span>
        <span className="badge ">{genreTolowerCase}</span>
      </small>
    </>
  }

};

export default IconGenre;