import React from "react";
import logo from "../assets/logo.svg";
import category from "../assets/category.svg";
import trend from "../assets/trend-up.svg";
import profile from "../assets/profile.svg";
import box from "../assets/box.svg";
import discount from "../assets/discount.svg";
import info from "../assets/info.svg";
import light from "../assets/brightness.svg";
import moon from "../assets/moon.svg";
import logout from "../assets/logout.svg";
import setting from "../assets/setting.svg";
import arrow from "../assets/arrow-right.svg";

const data = [category, trend, profile, box, discount, info];
const data2 = [arrow, setting, logout];

const SideBar = () => {
  return (
    <section className="lg:w-16 xl:w-20 hidden flex-col items-center p-[20px_0] border-r-[#EBECF2] bg-[#F7F8FA] h-fit md:flex">
      <section className="flex flex-col items-center self-stretch gap-[150px] ">
        <div className="flex flex-col gap-5 self-stretch items-center">
          <img src={logo} alt="" className="w-10 h-10" />

          <div className="flex p-[10px] justify-between items-center flex-col gap-4">
            <SmallIcons data={data} />

            <span className="flex justify-center item-center gap-[16px] flex-col p-2 bg-white rounded-full">
              <span className="w-[30px] flex justify-center items-center gap-[9.375px] flex-col p-[6.563px_7.5px] bg-[#34CAA5] rounded-3xl">
                <img
                  src={light}
                  alt=""
                  className="w-[16.875px] h-[16.875px] "
                />
              </span>

              <img src={moon} alt="" />
            </span>
          </div>
        </div>

        <div className="flex p-[10px] justify-between items-center flex-col gap-4">
          <SmallIcons data={data2} />
        </div>
      </section>
    </section>
  );
};

const SmallIcons = ({ data }) =>
  data.map((item, index) => (
    <span
      className="w-10 h-10 flex justify-center items-center gap-[10px]"
      key={index}
    >
      <img src={item} alt="" className="w-6 h-6" />
    </span>
  ));

export default SideBar;
