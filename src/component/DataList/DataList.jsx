import React from "react";
import deleteIcon from "../../Icons/delete.svg";
import editIcon from "../../Icons/edit.svg";
import ReactReadMoreReadLess from "react-read-more-read-less";

function DataList({ items, handleDelete, index, handleEdit, count }) {
  return (
    <>
      {/* <div className="container">
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
      </div> */}
      <div className="mt-5 ">
        <div class="card " style={{ width: "14rem", height: "13rem" }}>
          <div class="card-body overflow-scroll bg-info" >
            
              <h5>
              {items}  </h5>
           
          </div>

          <div class=" d-flex  justify-content-around " style={{backgroundColor:"#b8973d"}}>
            <div>
              <img
                src={deleteIcon}
                alt="delete "
                onClick={() => handleDelete(index)}
              />
            </div>
            <div>
              <img
                src={editIcon}
                alt="edit"
                onClick={() => handleEdit(items, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataList;
