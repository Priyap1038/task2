import React from "react";

const SideBar = ({setActive}) => {
  return (
    <div className="sideBar">
      <div className="box" onClick={()=> setActive("material")}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2550/2550264.png"
            alt="construction"
          />
        </div>
        <p>Material Marketplace</p>
      </div>

      <div className="box" onClick={()=> setActive("construction")}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2550/2550264.png"
            alt="construction"
          />
        </div>
        <p>Construction line Marketplace</p>
      </div>

      <div className="box" onClick={()=> setActive("tools")}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2550/2550264.png"
            alt="construction"
          />
        </div>
        <p>Tools & equipment Marketplace</p>
      </div>
    </div>
  );
};

export default SideBar;
