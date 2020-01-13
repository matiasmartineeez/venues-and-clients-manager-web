import React, { useState, useEffect } from "react";
import VenueRowContent from "../venue-row-content";

function Row({ children, fields, content }) {
  const [open, setOpen] = useState(false);

  const checkValue = value => {
    return !(value == undefined || value.toString().trim() === "");
  };
  const renderValues = data => {
    const { data: rowData } = { data };

    return fields.map(f => {
      if (!rowData.hasOwnProperty(f)) rowData[f] = "Unavailable";

      return <p>{checkValue(rowData[f]) ? rowData[f] : "Unavailable"}</p>;
    });
  };

  return (
    <div className={`row ${open && "open"}`}>
      <div className="data" onClick={() => setOpen(!open)}>
        {renderValues(children)}
      </div>

      {open && content}
    </div>
  );
}

export default Row;
