import React, { useState } from "react";
import Inputfield from "./input/Inputfield";
import Button from "./button/Button";
import DataList from "./DataList/DataList";

function MainPage() {
  const [inputData, setInputData] = useState("");
  const [dataList, setDataList] = useState([]);
  const [buttonText, setButtonText] = useState("Add");
  const [currIndex, setCurrIndex] = useState();
  const handleInput = (e) => {
    const value = e.target.value;
    setInputData(value);
  };

  const handleClick = () => {
    if (inputData !== "") {
      if (buttonText === "Add") {
        setDataList((prevData) => {
          return [...prevData, inputData];
        });
        setInputData("");
      } else {
        setDataList((prevData) => {
          return dataList.map((prevData, index) => {
            return index === currIndex ? inputData : prevData;
          });
        });
        setButtonText("Add");
      }
      setCurrIndex();
      setInputData("");
    }
  };

  const handleDelete = (id) => {
    const remove = dataList.filter((items, index) => index !== id);
    setDataList(remove);
  };

  const handleEdit = (item, index) => {
    setCurrIndex(index);
    setInputData(item);
    setButtonText("Edit");
  };

  return (
    <>
      <div className="container text-center mt-5 h3">TO DO APP</div>
      <div>
        <div className="container d-flex gap-3">
          <Inputfield handleInput={handleInput} inputData={inputData} />
          <Button handleClick={handleClick} buttonText={buttonText} />
        </div>
        <div>
          {dataList.map((items, index) => (
            <DataList
              items={items}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
