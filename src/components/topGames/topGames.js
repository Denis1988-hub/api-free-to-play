import React, {Component} from 'react';
import './topGames.css'

class TopGames extends Component {
  render() {
    return (
        <div className="row cls">
            <span className="num">1</span>
                  <img className="thumbnail"
                       src="https://www.freetogame.com/g/497/thumbnail.jpg"  alt="Genshin Impact" />
                       <div className="about">
                         <h3>Title</h3>
                         <p>
                           <i className="fas fa-award mr-2" />
                           Genshin Impact is currenty one ofthe most-played Free To Play games in January 2021.
                         </p>
                       </div>

        </div>
    );
  }
}

export default TopGames;