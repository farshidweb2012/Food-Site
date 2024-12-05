import React from "react";
import "./exploremenu.css";

import { menu_list } from "../../Shop_Asset/menu-list";

const ExploreMenu = () => {
  return (
    <div className="explore">
      <h1 className="explore-title">Explore Our menu</h1>
      <div className="explore-container" >
        {menu_list.map((item) => (
          <div className="explore-box">
            <img className="explore-image" alt={item.name} src={item.image} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
