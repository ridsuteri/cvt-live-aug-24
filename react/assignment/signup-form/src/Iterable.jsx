import React from "react";

function Iterable() {
  let data = [];
  data.push("Delhi", "Mumbai", "Kolkata");
  data.push("Banglore");
  return (
    <div>
      {data.map((city,index) => (
        <div key={index}>{city}</div>
      ))}
    </div>
  );
}

export default Iterable;
