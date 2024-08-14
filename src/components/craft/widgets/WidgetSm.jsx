import { cities } from "../../../data/widget";

function WidgetSm() {
  return (
    <>
      <div className="rounded-3xl bg-gradient-to-br text-white p-4 lg:px-8 font-sans lg:w-2/3 md:w-3/4 w-full ">
        {cities.map((item, i) => (
          <div
            key={i}
            className={`flex justify-between rounded-3xl my-7 bg-gradient-to-br text-white p-4 lg:px-8 hover:scale-110 transition ease-in-out duration-500
        ${item.color}
      `}
          >
            <div>
              <p className="text-xl font-bold">{item.city}</p>
              <p className="text-sm font-medium mb-5 opacity-75">{item.time}</p>
              <p className="text-sm font-medium mt-auto">{item.state}</p>
            </div>
            <div className="flex flex-col justify-between text-right">
              <p className="text-5xl">{item.temperature}°</p>
              <p className="text-sm font-medium mt-auto opacity-75">
                H:{item.high + 2}° L:{item.low - 2}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WidgetSm;
