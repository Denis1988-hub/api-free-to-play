
export default class APIService {

   _base = `https://free-to-play-games-database.p.rapidapi.com/api`;
   _videoBase = `https://www.freetogame.com/g`;
   init = {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "11958b4dcemsh9ecab42d2a21f09p1e6e79jsne0aff608cec1",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
  }};

   getResource = async (url) => {

    const res = await fetch(url, this.init);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    }
    return res.json();
  };

  getGameList = async () => {
    const res = await this.getResource(`${this._base}/games`);
    return  res.map(this._transformGameData)
  };

  getGameByPlatform = async (platform) => {
      //Insert platform, eg: pc, browser
    return  this.getResource(`${this._base}/games?platform=${platform}`)
  };

  getGamesByPC = async () => {
    return await this.getGameByPlatform('pc')
  };

  getGameByBrowser = async () => {
    return await this.getGameByPlatform('browser')
  };

  getGameVideo = (id) => {
    return `${this._videoBase}/${id}/videoplayback.webm`
  };

  getGamesByCategory = async (tag) => {
    //Insert game category or tag, eg: mmorpg, shooter, pvp, mmofps and more.
    return await this.getResource(`${this._base}/games?category=${tag}`)
  };

  getShooterGames = async (tag) => {
    return await this.getGamesByCategory('shooter')
  };

  getMMORPGGames = async (tag) => {
    return await this.getGamesByCategory('mmorpg')
  };

  getPVPGames = async (tag) => {
    return await this.getGamesByCategory('pvp')
  };

  getMMOFPSGames = async (tag) => {
    return await this.getGamesByCategory('mmofps')
  };


  _transformGameData = (game) => {
    return {
      id: game.id,
      title: game.title,
      developer: game.developer,
      ftgProfileUrl: game.freetogame_profile_url,
      gameUrl: game.game_url,
      genre: game.genre,
      platform: game.platform,
      publisher: game.publisher,
      releaseDate: game.release_date,
      shortDescription: game.short_description,
      thumbnail: game.thumbnail,
    }
  }


}
