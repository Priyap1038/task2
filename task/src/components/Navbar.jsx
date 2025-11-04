import React from "react";

const Navbar = () => {
  return (
    <div className="main">
      <div className="start">
        <img
          src="c:\Users\Priya\Downloads\6dc285641a068f594f363989dca7f56ac869fed4.png"
          alt="logo"
        />
      </div>

      <div className="mid">
        <div className="sideLogo mid">
          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9239/9239762.png"
              alt="home"
            />
            <lable>Home</lable>
          </div>

          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
              alt="dashboard"
            />
            <lable>Dashboard</lable>
          </div>

          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3693/3693669.png"
              alt="Category"
            />
            <lable>Category</lable>
          </div>

          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15852/15852170.png"
              alt="connection"
            />
            <lable>Connection</lable>
          </div>

          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3917/3917762.png"
              alt=""
            />
            <lable>More</lable>
          </div>
        </div>

        <div className="round">
          <div className="round2">
            <div className="circle">+</div>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3917/3917705.png"
          alt="profile"
          className="profile"
        />

        <div className="name">
          <p>Adarsh</p>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3916/3916882.png"
              alt=""
            />{" "}
            <p>JP nagar 7th phase</p>
          </div>

        </div>
      </div>


      <div className="explore">
          <button className="expButton">Explore</button>
          <div className="exp2">
            <div className="icon2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3916/3916699.png"
                alt=""
              />
            </div>

            <div className="icon2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/16309/16309890.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
