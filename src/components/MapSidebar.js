import React from "react";
import { slide as Menu } from "react-burger-menu";

function MapSidebar() {
  const handleSelect = e => {
    console.log(e.target.value);
  };
  return (
    <Menu>
      <form className="menu-item">
        <div>
          {" "}
          Select data to view
          <div>
            {" "}
            <input
              type="radio"
              name="selectedCases"
              value="deaths"
              onClick={handleSelect}
            />
            Deaths
          </div>
          <div>
            {" "}
            <input
              type="radio"
              name="selectedCases"
              value="totalCases"
              onClick={handleSelect}
              defaultChecked
            />
            Total Cases
          </div>
          <div>
            {" "}
            <input
              type="radio"
              name="selectedCases"
              value="activeCases"
              onClick={handleSelect}
            />
            Active Cases
          </div>
        </div>
      </form>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
}

export default MapSidebar;
