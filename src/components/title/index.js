import React, { useState, useEffect, useRef } from "react";

function TitleWithInput({ children: title, action, onSubmit }) {
  const [open, setOpen] = useState(false);
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
    if (className === "close" && open) closeInput();
    else if (className === "action" && open) closeInput(true);
    else openInput();
  };

  const handleInput = ({ target: { value } }) => {
    setNewVenue(value);
  };

  const handleSubmit = ({ key: keyName }) => {
    if (keyName === "Enter") {
      onSubmit(newVenue);
    }
  };

  return (
    <div
      className={`title upshow-border ${open && "open"}`}
      onClick={handleToggle}
    >
      <span className="title-text">{title}</span>
      <span className="action">{action}</span>

      {open && (
        <input
          ref={newVenueInput}
          className="input"
          type="text"
          //This is assuming that te thitle is in plural
          placeholder={title.slice(0, -1)}
          onClick={e => {
            e.preventDefault();
          }}
          value={newVenue}
          onKeyDown={handleSubmit}
          onChange={handleInput}
        />
      )}
      {open && <span className="close">X</span>}
    </div>
  );
}

export default TitleWithInput;
