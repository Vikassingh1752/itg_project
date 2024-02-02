import React, { useState } from "react";
import { useName } from "../contextApi";
import Rightbar from "./Rightbar";
import stateData from "../data.json";

const Middlebar = () => {
  const [band, setBand] = useState("true");
  const { getNameValue, setNameValue } = useName();

  const stateName = getNameValue();

  const detail = stateData.filter((r) => r.name === stateName);
  // console.log("detail: ", detail[0].description);

  const handleClick = () => {
    if (detail && detail.length > 0 && detail[0].description) {
      console.log("detail: ", detail[0].description);
      setBand(!band); 
    } else {
      console.error("Invalid detail structure");
    }
  };

  return (
    <div>
      {band ? <h1>{detail[0]?.description}</h1> : ""}

      <button onClick={handleClick}>X</button>
      {stateName ? <Rightbar /> : ""}
    </div>
  );
};

export default Middlebar;
