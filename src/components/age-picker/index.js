import React, { useState, useEffect } from "react";

function AgePicker({ onChange: change }) {
  const [range, setRange] = useState({});

  const handleInput = ({ target: { value, name } }) => {
    const { range: newRange } = { range };

    newRange[name] = value;

    setRange(newRange);
    change(newRange);
  };

  return (
    <div className="age-picker-container">
      <h4>Select an age range</h4>
      <div className="age-pickers">
        <input
          type="number"
          onChange={handleInput}
          name="from"
          className="input"
          placeholder="from"
        />
        <input
          type="number"
          onChange={handleInput}
          name="to"
          className="input"
          placeholder="to"
        />
      </div>
    </div>
  );
}

export default AgePicker;
