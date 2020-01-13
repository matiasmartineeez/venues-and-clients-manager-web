import "../../rsc/scss/custom.scss";

import React from "react";

function ListHeader({ headers }) {
  return (
    <div className="list-header">
      {headers.map(h => (
        <p>{h}</p>
      ))}
    </div>
  );
}

export default ListHeader;
