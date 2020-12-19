import React from "react";
import { SidebarData } from "./SidebarData.js";
import '../css/Sidebar.css'
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className = 'Sidebar-header'>
        <span>Swings Admin</span>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, index) => {
          return (
            <li
              key={index}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
