import React, { useState, useEffect, useRef } from "react";

function CreateButton({ onSubmit, fields = null }) {
  const [open, setOpen] = useState();
  const [newClient, setNewClient] = useState({});
  const newClientNameInput = useRef(null);

  useEffect(() => {
    if (open) newClientNameInput.current.focus();
  }, [open]);

  const submit = () => {
    const { name, email, age } = newClient;
    if ((name.trim() != "", email.trim() != "", age.trim() != "")) {
      onSubmit(newClient);
    }
  };

  const closeInput = (clean = false) => {
    setOpen(false);

    // optional arg clean is used to clean input content if needed
    if (clean) setNewClient({});
  };

  const openInput = () => {
    setOpen(true);
  };

  const handleToggle = ({ target: { className } }) => {
    //Dont know why setOpen didnt work with element onClick
    if (className === "close" && open) setOpen(false);
    else if (className === "action" && open) {
      submit();
      closeInput(true);
    } else openInput();
  };

  const handleInput = ({ target: { value, name } }) => {
    const { newClient: client } = { newClient };

    client[name] = value;
    setNewClient(client);
  };

  const handleSubmit = ({ key: keyName }) => {
    if (keyName === "Enter") {
      submit();
      closeInput(true);
    }
  };

  return (
    <div
      className={`create-button client ${open && "open"}`}
      onClick={handleToggle}
    >
      <span className="action">Create</span>

      {open && (
        <>
          <input
            ref={newClientNameInput}
            onChange={handleInput}
            value={newClient.name}
            name="name"
            className="input"
            placeholder="Alias*"
          />
          <input
            onChange={handleInput}
            value={newClient.name}
            name="email"
            className="input"
            placeholder="Email*"
          />
          <input
            onChange={handleInput}
            value={newClient.name}
            name="age"
            type="number"
            className="input"
            placeholder="Age*"
          />
          <input
            onChange={handleInput}
            value={newClient.name}
            name="firstName"
            className="input"
            placeholder="First Name"
          />
          <input
            onKeyDown={handleSubmit}
            onChange={handleInput}
            value={newClient.name}
            name="lastName"
            className="input"
            placeholder="Last Name"
          />
        </>
      )}
      {open && <span className="close">⤫</span>}
    </div>
  );
}

export default CreateButton;
