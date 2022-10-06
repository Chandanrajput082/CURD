import React from "react";
import deleteIcon from "../../Icons/delete.svg";
import editIcon from "../../Icons/edit.svg";

function DataList({ items, handleDelete, index, handleEdit, count }) {
  return (
    <>
      <div className="container">
        <div
          className="d-flex gap-3 mt-5 text-dark bg-info"
          style={{
            width: "50%",
            margin: "0 auto",
            borderRadius: "10px",
            padding: "1rem 0.6rem",
          }}
        >
          <div className="d-flex gap-3 text-wrap">
            <h5>{index + 1}</h5>
            <h5>{items}</h5>
          </div>

          <div className="container d-flex justify-content-end gap-3">
            <img
              src={deleteIcon}
              alt="delete "
              onClick={() => handleDelete(index)}
            />
            <img
              src={editIcon}
              alt="edit"
              onClick={() => handleEdit(items, index)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DataList;
