import React, { useState, useEffect, useRef } from "react";

function CreateButton({ onSubmit, fields = null }) {
  const [open, setOpen] = useState();
  const [newVenue, setNewVenue] = useState("");
  const newVenueInput = useRef(null);

  useEffect(() => {
    if (open) newVenueInput.current.focus();
  }, [open]);

  const closeInput = (clean = false) => {
    setOpen(false);

    // optional arg clean is used to clean input content if needed
    if (clean) setNewVenue("");
  };

  const openInput = () => {
    setOpen(true);
  };

  const handleToggle = ({ target: { className } }) => {
    //Dont know why setOpen didnt work with element onClick
    if (className === "close" && open) setOpen(false);
    else if (className === "action" && open) {
      onSubmit(newVenue);
      closeInput(true);
    } else openInput();
  };

  const handleInput = ({ target: { value } }) => {
    setNewVenue(value);
  };

  const handleSubmit = ({ key: keyName }) => {
    if (keyName === "Enter") {
      onSubmit(newVenue);
      closeInput(true);
    }
  };
  return (
    <div className={`create-button ${open && "open"}`} onClick={handleToggle}>
      <span className="action">Create</span>

      {open && (
        <input
          ref={newVenueInput}
          onKeyDown={handleSubmit}
          onChange={handleInput}
          value={newVenue}
          className="input"
          placeholder="venue"
        />
      )}
      {open && <span className="close">⤫</span>}
    </div>
  );
}

export default CreateButton;
