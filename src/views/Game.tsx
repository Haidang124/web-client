import React from 'react';
import '../assets/scss/component/game.scss';
const Game: React.FC = () => {
  return (
    <>
      <div className="game-component">
        <div className="ncsoft-video">
          <div className="ncsoft-video-overlay" />
          <h1 className="ncsoft-video-text">
            <img
              alt="..."
              src={require('../assets/img/brand/kahoot-logo.png')}
            />
          </h1>
          <video
            src="https://res.cloudinary.com/dbdzndhhn/video/upload/v1570306604/ncsoft-sizzle_r4lcta.mp4"
            autoPlay
            muted
            loop></video>
        </div>

        <div className="game-list">
          <div className="game-list-wrapper">
            <div className="left-border" />
            <div className="right-border" />
            <div className="top-border">
              <img
                src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570344391/edge-flare-1_lkslyt.png"
                alt="edge"
                className="edge-flare"
              />
            </div>
            <div className="bottom-border">
              <img
                src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570344391/edge-flare-1_lkslyt.png"
                alt="edge"
                className="edge-flare"
              />
            </div>
            <div className="game-list-container">
              <div className="game-list-item">
                <div className="arrow-container">
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="game-list-item-image">
                  <img
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570340132/aion-legions-of-war-logo-featured_qpk76n.png"
                    alt="aion"
                    className="game-list-item-image-title"
                  />
                  <img
                    className="game-list-item-image-bg"
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324142/aion-legions-of-war-bg-featured_ykdx8h.jpg"
                    alt="aion"
                  />
                </div>
                <h4 className="game-list-item-title">aion: legions</h4>
                {/* <p className="game-list-item-text">
                  visit site <span className="caret">&gt;</span>
                </p> */}
                <a href="game/123">
                  <button type="button" className="btn btn-info">
                    Play game
                  </button>
                </a>
              </div>
              <div className="game-list-item">
                <div className="arrow-container">
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="game-list-item-image">
                  <img
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324466/blade-and-soul-featured-logo_t45nzb.png"
                    alt="blade&soul"
                    className="game-list-item-image-title"
                  />
                  <img
                    className="game-list-item-image-bg"
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324146/blade-and-soul_c2zme0.jpg"
                    alt="blade&soul"
                  />
                </div>
                <h4 className="game-list-item-title">blade &amp; soul</h4>
                {/* <p className="game-list-item-text">
                  visit site <span className="caret">&gt;</span>
                </p> */}
                <button type="button" className="btn btn-info">
                  Play game
                </button>
              </div>
              <div className="game-list-item">
                <div className="arrow-container">
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="game-list-item-image">
                  <img
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570340132/guild-wars-2-logo-featured_hfjfyp.png"
                    alt="guildwars2"
                    className="game-list-item-image-title"
                  />
                  <img
                    className="game-list-item-image-bg"
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324154/guild-wars-2-bg-featured_n8tmjl.jpg"
                    alt="guildwars2"
                  />
                </div>
                <h4 className="game-list-item-title">guild wars 2</h4>
                {/* <p className="game-list-item-text">
                  visit site <span className="caret">&gt;</span>
                </p> */}
                <button type="button" className="btn btn-info">
                  Play game
                </button>
              </div>
              <div className="game-list-item">
                <div className="arrow-container">
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="game-list-item-image">
                  <img
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570340132/aion-logo-featured_jb5hn9.png"
                    alt="aion"
                    className="game-list-item-image-title"
                  />
                  <img
                    className="game-list-item-image-bg"
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324139/aion-bg-featured_oyzenv.jpg"
                    alt="aion"
                  />
                </div>
                <h4 className="game-list-item-title">aion</h4>
                {/* <p className="game-list-item-text">
                  visit site <span className="caret">&gt;</span>
                </p> */}
                <button type="button" className="btn btn-info">
                  Play game
                </button>
              </div>
              <div className="game-list-item">
                <div className="arrow-container">
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="game-list-item-image">
                  <img
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570340132/guild-wars-logo-featured_rk9iby.png"
                    alt="guildwars"
                    className="game-list-item-image-title"
                  />
                  <img
                    className="game-list-item-image-bg"
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324150/guild-wars-bg-featured_xmiiqq.jpg"
                    alt="guildwars"
                  />
                </div>
                <h4 className="game-list-item-title">guild wars</h4>
                {/* <p className="game-list-item-text">
                  visit site <span className="caret">&gt;</span>
                </p> */}
                <button type="button" className="btn btn-info">
                  Play game
                </button>
              </div>
              <div className="game-list-item">
                <div className="arrow-container">
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="game-list-item-image">
                  <img
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570340132/lineage-ii-logo-featured_scw9qo.png"
                    alt="lineage2"
                    className="game-list-item-image-title"
                  />
                  <img
                    className="game-list-item-image-bg"
                    src="https://res.cloudinary.com/dbdzndhhn/image/upload/v1570324156/lineage-ii-bg-featured_n9pdlu.jpg"
                    alt="lineage2"
                  />
                </div>
                <h4 className="game-list-item-title">lineage II</h4>
                {/* <p className="game-list-item-text">
                  visit site <span className="caret">&gt;</span>
                </p> */}
                <button type="button" className="btn btn-info">
                  Play game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
