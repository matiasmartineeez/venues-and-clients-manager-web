import React, { useState, useEffect } from "react";

function VenueRowContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => setData(Math.random()), 1000);
  }, []);

  return (
    <div className="row-content">
      {!data ? <h1> LOADING... </h1> : <h1>{data} users likes this venue</h1>}
    </div>
  );
}

export default VenueRowContent;
