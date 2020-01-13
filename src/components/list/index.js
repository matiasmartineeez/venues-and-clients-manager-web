import React from "react";
import Title from "../title";
import ListHeader from "../list-header";

function List({ data, headers, renderItem }) {
  const rows = data.map((r, index) => renderItem(r, index));

  return (
    <div className="list-container">
      <ListHeader headers={headers} />

      <div className="list">
        {rows.length ? (
          rows
        ) : (
          <h2> It looks like we dont have any information here... </h2>
        )}
      </div>
    </div>
  );
}

export default List;
