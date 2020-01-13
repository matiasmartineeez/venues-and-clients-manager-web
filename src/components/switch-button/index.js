import React from "react";
import { NavLink as Link } from "react-router-dom";
function SwitchButton({ title, to }) {
  return (
    <Link className="switch-button" to={to}>
      {title}
    </Link>
  );
}

export default SwitchButton;
