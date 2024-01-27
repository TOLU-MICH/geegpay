import React from "react";
import RecordCard from "./RecordCard";
import icon from "../assets/box-tick.svg";
import icon2 from "../assets/3d-rotate.svg";
import icon3 from "../assets/shopping-cart.svg";
import icon4 from "../assets/coin.svg";
import Carousel from "react-elastic-carousel";
import Item from "../Item";

const data = [
  {
    icon: icon,
    title: "Total Order",
    amount: 350,
    percent: "23.5",
    trend: true,
  },
  {
    icon: icon2,
    title: "Total Refund",
    amount: 270,
    percent: "23.5",
  },
  {
    icon: icon3,
    title: "Average Sales",
    amount: 1567,
    percent: "23.5",
  },
  {
    icon: icon4,
    title: "Total Income",
    amount: "$350,000",
    percent: "23.5",
    trend: true,
  },
];

const RecordContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ];

  const sliderArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === "prev" ? "" : "";
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  return (
    <section className=" max-w-[80%] lg:max-w-[45%] xl:max-w-[510px] w-full my-5 md:my-auto">
      <div className="flex-wrap lg:flex hidden">
        {data.map((item, index) => {
          return (
            <RecordCard
              headerIcon={item.icon}
              title={item.title}
              cardAmount={item.amount}
              percent={item.percent}
              trending={item.trend}
            />
          );
        })}
      </div>
      <div className="lg:hidden">
        <Carousel
          breakPoints={breakPoints}
          itemsToShow={2}
          outerSpacing={30}
          renderArrow={sliderArrow}
        >
          {data.map((item, index) => {
            return (
              <Item>
                <RecordCard
                  headerIcon={item.icon}
                  title={item.title}
                  cardAmount={item.amount}
                  percent={item.percent}
                  trending={item.trend}
                  key={index}
                />
              </Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default RecordContainer;
