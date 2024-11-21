import React from "react";
import Button from "../utilities/Button";

function Adam() {
  return (
    <>
      <div className="w-full h-32 rounded-lg bg-[#F4EEFF] text-[#424874]">
        <div className="card h-full flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Adam</h1>
          <Button bg={"#ffffff"} className={"custom"}>
            Click Me
          </Button>
        </div>
      </div>
    </>
  );
}

export default Adam;
