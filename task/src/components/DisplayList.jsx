import React, { useState } from "react";
import Card from "./Card";
import data from "../db/data.json";
import Feature from "./Feature";
import DataList from "./DataList";
import ConstructionList from "./ConstructionList";
import ToolsList from "./ToolsList";

const DisplayList = ({ active }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="display1">
      <div>
        <Feature
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div className="list">
        {active === "material" && (
          <DataList 
          data={data} 
          search={search} 
          sort={sort} 
          filter={filter} />
        )}
        {active === "construction" && <ConstructionList />}
        {active === "tools" && <ToolsList />}
      </div>
    </div>
  );
};

export default DisplayList;
