import React, { useState, useEffect } from "react";
import VenueChip from "../venue-chip";

function ClientRowContent({
  venues,
  favoriteVenues,
  onSubmit: submit,
  onRemove: remove
}) {
  const [open, setOpen] = useState(false);

  const selectableVenues = venues.filter(v => !favoriteVenues.includes(v.id));
  const getNewSelectableVenue = () => {
    return selectableVenues && selectableVenues.length > 0
      ? selectableVenues[0].id
      : null;
  };

  const [selectedVenue, setSelectedVenue] = useState(getNewSelectableVenue());

  useEffect(() => {
    setSelectedVenue(getNewSelectableVenue());
  }, [favoriteVenues]);

  const renderFavoriteVenues = () =>
    favoriteVenues.map(fv => {
      const venue = venues.find(v => v.id === fv);
      if (venue) {
        return <VenueChip name={venue.name} remove={() => remove(venue.id)} />;
      }
    });

  const renderVenuesOptions = () =>
    venues
      .filter(v => !favoriteVenues.includes(v.id))
      .map(v => <option value={v.id}>{v.name}</option>);

  const handleChangeFavoriteVenue = e => setSelectedVenue(e.target.value);

  const handleAddFavoriteVenue = () => selectedVenue && submit(selectedVenue);

  return (
    <div className="favorite-venues-container">
      <div className="favorite-venues-header">
        <h2>Favorite venues list</h2>
        <div
          className={`add-favorite-venue ${open && "open"}`}
          onClick={() => setOpen(true)}
        >
          <span onClick={open ? handleAddFavoriteVenue : null}>﹢</span>
          {open && (
            <select onChange={handleChangeFavoriteVenue}>
              {renderVenuesOptions()}
            </select>
          )}
        </div>
      </div>
      <div className="favorite-venues-list">{renderFavoriteVenues()}</div>
    </div>
  );
}

export default ClientRowContent;
