import React from "react";
import data from "./timeZone";
const Timing = () => {
  const Value = () => {
    data.map((item, index) => {
      console.log(item.time);
      return <div>{item.time}</div>;
    });
  };
  return <div>{Value}</div>;
};
export default Timing;
