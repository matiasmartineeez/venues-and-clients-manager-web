import React from "react";

function TV({ children }) {
  return (
    <div className="tv-container">
      <div id="monitor">
        <div id="monitorscreen">{children}</div>
      </div>
    </div>
  );
}

export default TV;
