import React from 'react';
import './IconGenre.css'

const IconGenre = ({platform}) => {

    switch (platform) {

        case 'Web Browser': {
            return <i className="fab fa-firefox-browser">
                <small className="text">
                    <span>{platform}</span>
                </small>
            </i>
        }

        case 'PC (Windows)': {
            return <i className="fab fa-windows">
                <small className="text">
                    <span>{platform}</span>
                </small>
            </i>
        }

        default: {
            return <>
                <i className="fab fa-firefox-browser"/>
                <i className="fab fa-windows"/>
                <small className="text">
                    <span>{platform}</span>
                </small>
            </>
        }

    }

};

export default IconGenre;