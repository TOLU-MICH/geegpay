import React from "react";
import search from "../assets/search.svg";
import arrow from "../assets/Arrow-Down 2.svg";
import bell from "../assets/solar_bell.svg";
import user from "../assets/user.png";
import calendar from "../assets/calendar.svg";

const OtherNavBar = () => {
  return (
    <section className="hidden md:flex w-full justify-center items-center py-2 xl:py-4 gap-[18px] flex-col bg-[#FAFAFA] border border-[#E5EAEF]">
      <section className="flex justify-between items-center self-stretch max-w-[97%] w-full xl:mx-auto">
        <section className="flex justify-between items-center max-w-[51%] w-full ">
          <h1 className="text-xl font-semibold text-[#26282C]">Dashboard</h1>
          <div className="flex max-w-[65%]  w-full items-start">
            <div className="flex h-12   pl-4 items-center gap-2 flex-[1_0_0] rounded-3xl border-[#DADDDD] border-[1px] bg-white">
              <img src={search} alt="" className="w-[18px] h-[18px] " />
              <input
                type="text"
                placeholder="Search"
                className="text-base font-normal font-[Inter] text-[#A3A3A3] outline-0"
              />
            </div>
          </div>
        </section>
        <section className="flex items-center gap-[20px] ">
          <div className="flex h-10 p-[12px_16px] justify-center items-center gap-2 rounded-[20px] ">
            <div className="flex justify-content items-center gap-[10px]">
              <img src={calendar} alt="" className="w-5 h-5" />
              <p className="font-medium text-[14px] font-[Inter]">
                November 15, 2023
              </p>
            </div>
          </div>

          <div className="flex w-14 xl:w-10 h-10 lg:p-[3px] xl:p-[11px] justify-center items-center gap-[6px] rounded-[27px] border-[0.769px] border-[#DADDDD]">
            <img src={bell} alt="" className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </div>

          <div className="flex p-[6px_8px] justify-center items-center gap-3 border-[1px] border-[#DADDDD] rounded-full h-12">
            <div className="flex items-center gap-2 min-w-max">
              <img
                src={user}
                alt=""
                className="w-[38px] h-[38px] rounded-3xl bg-cover bg-no-repeat bg-center bg-[#D9D9D9] "
              />
              <span className="lg:flex flex-col items-end gap-1 hidden">
                <p className="text-[#26282C] text-right font-[Inter] text-base leading-3 font-normal">
                  Justin Bergson
                </p>
                <p className="text-[#787486] text-right font-[Inter] text-[14px] font-normal leading-3">
                  Justin@gmail.com
                </p>
              </span>
              <img src={arrow} alt="" className="w-4 h-4" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default OtherNavBar;
