import Widget from "../components/craft/widgets/Widget";
import WidgetSm from "../components/craft/widgets/WidgetSm";
import ic_widget from "../img/craft/widget/widget_cover.jpg";
export const blog = [
  {
    id: 1,
    title: "Using Tailwind to create Apple like Widgets",
    desc: "In this practice, I created some weather widgets in the style of Apple. I used Tailwind to create them, and in this entry, I’m going to cover my thoughts and what I learned about it..",
    entrance:
      "To start this post, I would like to thank Brian Ruiz, who is a content creator from Colombia that I admire and who is currently an example of what I aspire to become. Thanks to him, I discovered Tailwind, and I loved it because it is very easy to use compared to CSS. In my opinion, it is better than Bootstrap—it's more intuitive, and the documentation is very clear. So, to show you what you can do with Tailwind, in this post, I'm going to show you how I create beautiful widgets using only Tailwind.",
    entrance2:
      "If you hover it, it makes it bigger, this  animation that occurs when you hover or click is completely achieved with Tailwind. Here is how I did it.",
    entrance3:
      "As you can see, it can be as easy as receiving a list of cities with different weather and colors and simply displaying them with a straightforward mapping. Not only can you style components easily, but you can also animate them with just a few lines of code. For me, this was a game changer. The fact that you can write just a few lines of code and achieve such beautiful results makes you wonder what you could accomplish with more lines of code. This is exactly what I did—exploring the possibilities.",
    entrance4:
      "This involves a lot more lines of code. Even though it requires more lines, it doesn’t make much of a difference compared to doing it with CSS. That’s why I fell in love with Tailwind—it eliminates the need to switch to another file and write 10 lines of code just to center a div  And that’s my conclusion: Tailwind can help you a lot with basic things with a few lines in web development and also for not so basic things too.",
    code: ` <>
    <div className="rounded-3xl bg-gradient-to-br text-white p-4 lg:px-8 font-sans w-2/3 ">
      {cities.map((item, i) => (
        <div
          className={'flex justify-between rounded-3xl my-7 bg-gradient-to-br text-white p-4 lg:px-8 hover:scale-110 transition ease-in-out duration-500
      item.color
    '} >
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
`,
    code2: `<>
      <div
        className={'rounded-3xl bg-gradient-to-br hover:scale-105 transition ease-in-out delay-100 text-xs '}
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
    </>`,
    cover: ic_widget,
    component: WidgetSm,
    component2: Widget,
  },
];
