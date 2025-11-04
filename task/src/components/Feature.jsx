import React, { useState } from "react";

const Feature = ({ search, setSearch, sort, setSort }) => {
  const [showSort, setShowSort] = useState(false);

  return (
    <div className="box2">
      <div className="feature">
        {/* SORT BUTTON */}
        <div className="sort-wrapper"> 
          <button
            onMouseOver={() => setShowSort(!showSort)}
            onmo={() => setShowSort(showSort)}
          >
            Sort
            <img
              src="https://cdn-icons-png.flaticon.com/128/4662/4662255.png"
              alt="sort"
            />
          </button>

         
            <div className="sort-menu">
              <p
                onClick={() => {
                  setSort("price-low-high");
                }}
              >
                Price: Low → High
              </p>

              <p
                onClick={() => {
                  setSort("price-high-low");
                }}
              >
                Price: High → Low
              </p>
            </div>
        </div>

        {/* LOCATION BUTTON */}
        <button>
          Location
          <img
            src="https://cdn-icons-png.flaticon.com/128/3425/3425077.png"
            alt="location"
          />
        </button>
      </div>

      {/* SORT OPTIONS DROPDOWN */}

      {/* SEARCH INPUT */}
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Feature;
