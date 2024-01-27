import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import graphIcon from "../assets/Vector.svg";
import graphIcon2 from "../assets/Vector2.svg";

const RecordCard = ({ headerIcon, title, cardAmount, percent, trending }) => {
  return (
    <Paper
      elevation={3}
      className="flex gap-4 xl:gap-[10px] flex-col m-5 mx-7 md:m-1 xl:m-2 justify-between lg:max-w-[48%] xl:max-w-[239px] p-4 w-full"
    >
      <section className="flex justify-between items-center">
        <div className="w-10 border border-[#e6e6e6] rounded-3xl p-[0.4rem] xl:p-2">
          <img
            src={headerIcon}
            alt=""
            className="w-5 h-5 mx-auto  xl:w-6 xl:h-6 "
          />
        </div>

        {!trending ? (
          <img
            src={graphIcon2}
            alt=""
            className="w-20 xl:w-[104px] xl:h-[32px]"
          />
        ) : (
          <img
            src={graphIcon}
            alt=""
            className="w-20 xl:w-[104px] xl:h-[32px]"
          />
        )}
      </section>

      <section>
        <h1 className="text-base xl:text-[18px] font-medium text-[#898989]">
          {title}
        </h1>
        <h2 className="text-xl xl:text-2xl font-medium text-[#3A3F51]">
          {cardAmount}
        </h2>
      </section>

      <section className="flex text-[#606060] text-xs xl:text-[14px] font-normal gap-[10px] items-center">
        <span
          className={
            "text-[10px] xl:text-[12px] font-medium  flex gap-1 p-[6px_5px] xl:p-[4px_8px] justify-center items-center  rounded-xl " +
            (!trending
              ? "bg-[rgba(237,84,78,0.12)] text-[#ED544E]"
              : "bg-[rgba(52,202,165,0.12)] text-[#34CAA5]")
          }
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-3 h-3 " + (!trending ? "-scale-y-100" : "")}
          >
            <path
              d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5"
              stroke={!trending ? "#ED544E" : "#34CAA5"}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 3.5H10.5V7"
              stroke={!trending ? "#ED544E" : "#34CAA5"}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {percent}%
        </span>
        vs previous month
      </section>
    </Paper>
  );
};

export default RecordCard;
