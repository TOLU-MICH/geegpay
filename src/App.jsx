import { useState } from "react";
import "./App.css";
import "./index.css";
import TableComponent from "./component/TableComponent";
import SideBar from "./component/SideBar";
import OtherNavBar from "./component/OtherNavBar";
import Chart from "./component/Chart";
import ProgressBar from "./component/ProgressBar";
import ProgressItem from "./component/ProgressItem";
import ProgressContainer from "./component/ProgressContainer";
import Selection from "./component/Selection";
import ChartContainer from "./component/ChartContainer";
import RecordContainer from "./component/RecordContainer";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import MobileAppBar from "./component/MobileAppBar";

function App() {
  return (
    <section className=" h-screen flex font-['Plus_Jakarta_Sans',sans-serif]">
      <SideBar />
      <div className="flex flex-col w-full bg-[#FAFAFA] gap-5">
        <OtherNavBar />
        <MobileAppBar />
        <div className="flex flex-wrap lg:gap-2 xl:gap-5 xl:justify-center self-stretch justify-around ">
          <ChartContainer />
          <RecordContainer />
          <TableComponent />
          <ProgressContainer />
        </div>
      </div>
    </section>
  );
}

export default App;
