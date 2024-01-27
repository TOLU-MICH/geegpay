import React from "react";
import Selection from "./Selection";
import Chart from "./Chart";
import { Box, Paper } from "@mui/material";

const ChartContainer = () => {
  return (
    <Paper className=" w-full p-[20px_18px] bg-white max-w-[80%] lg:max-w-[50%] flex flex-col h-[374px]">
      <div className="flex justify-between items-center self-stretch w-full mb-5">
        <p className="text-[#22242C] text-[16px] font-semibold">Sales Trend</p>
        <span className="flex gap-[10px] justify-center items-center">
          <p className="text-[#3A3F51] text-[14px] font-normal">See All</p>{" "}
          <Selection />
        </span>
      </div>
      <Chart />
    </Paper>
  );
};

export default ChartContainer;
