import React from "react";

function VenueChip({ name, remove }) {
  return (
    <div class="md-chip">
      <span>{name}</span>
      <button type="button" class="md-chip-remove" onClick={remove}></button>
    </div>
  );
}

export default VenueChip;
