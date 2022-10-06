import React from "react";

function Inputfield({ handleInput, inputData  }) {
  return (
    <div className="input-group input-group-lg mt-4 ">
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        onChange={handleInput}
        value={inputData}
      />
    </div>
  );
}

export default Inputfield;
