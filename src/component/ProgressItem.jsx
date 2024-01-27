import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressItem = ({ data }) => {
  console.log(data.name);
  return (
    <div className="w-full ">
      <p className="text-[#22242C] text-base font-semibold">{data.name}</p>
      <ProgressBar colors={data.color} value={data.value} />

      <div className="inline-flex justify-between items-center w-full">
        <p className="font-normal text-base text-[#525252]">$ {data.amount}</p>
        <p className="font-normal text-base text-[#525252]">
          {" "}
          +{data.percentage}%
        </p>
      </div>
    </div>
  );
};

export default ProgressItem;
