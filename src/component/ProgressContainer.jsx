import React from "react";
import ProgressItem from "./ProgressItem";
import { Paper } from "@mui/material";

const ProgressContainer = () => {
  function createData(name, amount, percentage, color, value) {
    return { name, amount, percentage, color, value };
  }

  const data = [
    createData(
      "Book Bazaar",
      "2,500,000",
      15,
      ["#6160DC", "#6160DC"],
      54.203539823
    ),
    createData(
      "Artisan Aisle",
      "1,800,000",
      10,
      ["#54C5EB", "#54C5EB"],
      42.203539823
    ),
    createData(
      "Toy Troop",
      "1,200,000",
      8,
      ["#FFB74A", "#FFB74A"],
      30.203539823
    ),
    createData("XStore", "600,000", 5, ["#FF4A55", "#FF4A55"], 30.203539823),
  ];

  return (
    <Paper
      elevation={3}
      className="inline-flex flex-col items-start p-[16px_16px_32px_20px] gap-5 rounded-lg sm:max-w-[50%] sm:min-w-[463px] max-w-[97%] lg:min-w-0  my-5 lg:my-0 md:max-w-[44%] xl:max-w-[499px] bg-white w-full m-1 xl:m-2"
    >
      <div className="flex justify-between items-center self-stretch">
        <p className="text-[#22242C] text-[18px] font-semibold">Top Platform</p>
        <p className="text-[#34CAA5] text-[18px] font-semibold">See All</p>
      </div>
      {data.map((item, index) => (
        <ProgressItem data={item} key={index} />
      ))}
    </Paper>
  );
};

export default ProgressContainer;
