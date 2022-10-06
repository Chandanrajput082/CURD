import React from "react";

function Button({ handleClick, buttonText, items, id }) {
  return (
    <button


      type="button"
      className="btn btn-success mt-4 "
      onClick={() => handleClick(items, id)}
    >
      {buttonText}
    </button>
  );
}

export default Button;
