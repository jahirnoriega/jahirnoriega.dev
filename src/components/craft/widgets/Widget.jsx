import React, { useState } from "react";
import { widgets, daysWeather } from "../../../data/widget";
import { FaCloud, FaCloudShowersHeavy } from "react-icons/fa6";

function Widget() {
  const [color, setColor] = useState("from-darkblue to-light_gray");

  const colors = [
    "from-darkblue to-light_gray",
    "from-light_blue to-lighter_blue",
  ];

  const handleClick = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <>
      <div
        className={`rounded-3xl bg-gradient-to-br text-white p-4 lg:px-8 font-sans lg:w-2/3 md:w-3/4 w-full hover:scale-105 transition ease-in-out delay-100 text-xs ${color}`}
        onClick={handleClick}
      >
        <div className="flex justify-between ">
          <div>
            <p className="text-lg mb-2 ">Chihuahua</p>
            <p className="text-5xl mb-5">23°</p>
          </div>
          <div className="flex flex-col justify-right text-right mb-3">
            <FaCloud className="w-6 h-auto m-2  self-end " />
            <div className="align-baseline mt-auto">
              <p className="text-md">Cloudy</p>
              <p className="text-md  opacity-75">H:23° L:7°</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-b-2 border-border_color mx-2 flex justify-between mb-3">
          {widgets.map((widget, i) => (
            <div key={i} className="p-2 flex flex-col items-center ">
              <p className="text-border_color mb-2">{widget.hour}</p>
              <FaCloud className="w-6 h-auto mb-2" />
              <p className="text-lg">{widget.grades}</p>
            </div>
          ))}
        </div>
        <div className="mx-2 justify-between my-4">
          {daysWeather.map((day, i) => (
            <div
              key={i}
              className="flex justify-between mx-2 items-center text-lg my-5"
            >
              <p>{day.day}</p>
              <FaCloudShowersHeavy className="w-6 h-auto " />
              <div className="flex w-3/5 items-center">
                <p>{day.low}</p>
                <div className="h-2 w-2/3 rounded-full mx-4 bg-gradient-to-r from-yellow to-orange2"></div>
                <p>{day.high}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Widget;
