import React, {Component} from 'react';
import './GameDetails.css'
import APIService from "../apiService/APIService";
import Spinner from "../spinner/Spinner";
import IconGenre from "../iconGenre/IconGenre";

class GameDetails extends Component {

  api = new APIService();

  getVideoById(id) {
    return this.api.getGameVideo(id)
  }

  showVideo(source) {
    const {thumbnail} = this.props.getData;
    return (
        <video className="player" autoPlay preload="none" poster={thumbnail}>
          <source src={source} type="video/mp4"/>
        </video>
    )
  }

  render() {
    const {getData} = this.props;

    if (!getData) {
      return <Spinner/>
    }

    const {
      developer, id, genre, thumbnail,
      platform, publisher, releaseDate, shortDescription, title
    } = getData;

    const video = this.getVideoById(id);

    return (

          <div className="container video-page">
            <img src={thumbnail} className="bg" alt=""/>
            <div className="col-md-2 info">
              <div className="card m-3 video-card">
                {this.showVideo(video)}
                <div className="card-body mt-2">
                  <h3>About</h3>
                  <p className="card-text">{shortDescription}.</p>
                </div>
              </div>
            </div>

            <aside className="sidebar control-box">
              <h1 className="m-3">{title}</h1>
              <ul className="list-group m-3">
                <li className="list-group-item"><p>Title:&nbsp; {title}</p></li>
                <li className="list-group-item"><p>Game Id:&nbsp; {id}</p></li>
                <li className="list-group-item"><p>Developer:&nbsp; {developer}</p></li>
                <li className="list-group-item"><p>Publisher:&nbsp; {publisher}</p></li>
                <li className="list-group-item"><p>Release Date:&nbsp; {releaseDate}</p></li>
                <li className="list-group-item"><p>Genre:&nbsp; {genre}</p></li>
                <li className="list-group-item"><p>Platform: &nbsp;
                  <IconGenre platform={platform}/></p></li>
              </ul>
            </aside>
        </div>
    )

  }
}

export default GameDetails;

