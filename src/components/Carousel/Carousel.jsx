import React from "react";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="cont_items">
          <div className="home_cards">
            <div className="cards_item">
              <img src="https://cdn.wbgames.com/media/526/conversions/thumb_hover_1645571329-sized.jpg" />
              <p>Hogwarts Legacy</p>
              <div className="icons"></div>
            </div>
            <div className="cards_item">
              <img src="https://cdn.wbgames.com/media/481/conversions/thumb_1642729421-sized.jpg" />
              <p>MultiVersus</p>
              <div className="icons"></div>
            </div>
            <div className="cards_item">
              <img src="https://cdn.wbgames.com/media/493/conversions/thumb_1643410131-sized.jpg" />
              <p>LEGO® Star Wars™: The Skywalker Saga</p>
              <div className="icons"></div>
            </div>
            <div className="cards_item">
              <img src="https://cdn.wbgames.com/media/502/conversions/thumb_1644443888-sized.jpg" />
              <p>Harry Potter: Magic Awakened</p>
              <div className="icons"></div>
            </div>
            <div className="cards_item">
              <img src="https://cdn.wbgames.com/media/475/conversions/thumb_1637270808-sized.jpg" />
              <p>Back 4 Blood</p>
              <div className="icons"></div>
            </div>
          </div>
          <div className="filter_block">
            <div id="border"></div>
            <div className="filter_cont">
              <div className="filter_log">
                <p>FIND GAMES</p>
                <div className="log_arrow"></div>
              </div>
              <div className="filter_func">
                <select name="Device List">
                  <option>All Devices</option>
                  <option>Mobile</option>
                  <option>Play Station 4</option>
                  <option>XBOX One</option>
                  <option>Switch</option>
                  <option>PC</option>
                  <option>Season Pass</option>
                </select>
                <select name="Genre List">
                  <option>All Genres</option>
                  <option>RPG</option>
                  <option>Shooting</option>
                  <option>Strategy</option>
                  <option>Racing</option>
                  <option>Fantasy</option>
                  <option>Family</option>
                  <option>Sports</option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Simulation</option>
                  <option>Fighting</option>
                </select>
                <select name="Ratings List">
                  <option>All Ratings</option>
                  <option>Everyone</option>
                  <option>Everyone 10+</option>
                  <option>Teen</option>
                  <option>Mature</option>
                  <option>Rating Pending</option>
                </select>
                <button>APPLY</button>
              </div>
            </div>
            <div id="border"></div>
          </div>
          <div className="block_toUpdate">
            <div id="border"></div>
            <div className="block_toUpd_cont">
              <div className="box_toUpdate">
                <h3>
                  <i>
                    BE THE FIRST TO <br />
                    KNOW
                  </i>
                </h3>
                <p>Sign up and never miss an update.</p>
                <button>STAY CONNECTED</button>
              </div>
              <img
                src="https://cdn.wbgames.com/static/wb-play-slide-1.jpg"
                alt="be the first to know"
              />
            </div>
            <div id="border"></div>
          </div>
          <div className="featured">
            <h3>
              <i>FEATURED NEWS</i>
            </h3>
            <div className="featured_cards">
              <div className="img_left">
                <div className="featured_item">
                  <div id="border"></div>
                  <div className="meta">
                    <div className="meta_img">
                      <img
                        src="https://cdn.wbgames.com/media/545/conversions/thumb_hover_1680552441-sized.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feat_items_content">
                      <p>Harry Potter: Magic Awakened </p>
                      <h4>
                        Harry Potter: Magic Awakened Soft Launch Announcement
                      </h4>
                      <p>Read More {">>"}</p>
                    </div>
                  </div>
                  <div id="border"></div>
                </div>
                <div className="featured_item">
                  <div id="border"></div>
                  <div className="meta">
                    <div className="meta_img">
                      <img
                        src="https://cdn.wbgames.com/media/455/conversions/thumb_hover_1598489939-sized.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feat_items_content">
                      <p>Suicide Squad: Kill the Justice League </p>
                      <h4>
                        WARNER BROS. GAMES AND DC ANNOUNCE SUICIDE SQUAD: KILL
                        THE JUSTICE LEAGUE
                      </h4>
                      <p>Read More {">>"}</p>
                    </div>
                  </div>
                  <div id="border"></div>
                </div>
              </div>
              <div className="img_right">
                <div className="featured_item">
                  <div id="border"></div>
                  <div className="meta right">
                    <div className="meta_img">
                      <img
                        src="https://cdn.wbgames.com/media/450/conversions/thumb_hover_1598488647-sized.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feat_items_content">
                      <p>Gotham Knights</p>
                      <h4>WARNER BROS. GAMES AND DC ANNOUNCE GOTHAM KNIGHTS</h4>
                      <p>Read More {">>"}</p>
                    </div>
                  </div>
                  <div id="border"></div>
                </div>
                <div className="featured_item">
                  <div id="border"></div>
                  <div className="meta right">
                    <div className="meta_img">
                      <img
                        src="https://cdn.wbgames.com/media/446/conversions/thumb_hover_1588791600-sized.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feat_items_content">
                      <p>Mortal Kombat 11: Aftermath </p>
                      <h4>Official Mortal Kombat 11: Aftermath Announcement</h4>
                      <p>Read More {">>"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
