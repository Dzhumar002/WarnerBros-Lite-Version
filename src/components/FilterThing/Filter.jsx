import React from "react";
import "../FilterThing/Filter.css";
const Filter = () => {
  return (
    <div>
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
    </div>
  );
};

export default Filter;
