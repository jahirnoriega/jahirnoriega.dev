import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";

function CraftPost() {
  const postData = useLoaderData();
  const paramURL = new URLSearchParams(window.location.search);
  const id = parseInt(paramURL.get("id"));
  const postInfo = postData.filter((post) => post.id === id);
  const {
    title,
    date,
    desc,
    entrance,
    entrance2,
    entrance3,
    entrance4,
    component: Component,
    component2: Component2,
    img,
    img2,
    img3,
    code,
    code2,
    cover,
    url,
  } = postInfo[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=" dark:text-whiter text-midnight text-sm"
    >
      <div className="flex justify-between">
        <h1 className="mt-9 mb-3 text-3xl font-bold ali">{title}</h1>
        <p className="mt-10  text-light_gray dark:text-border_color w-1/3 text-end">
          {date}
        </p>
      </div>
      <p className="mt-10 text-justify">{entrance}</p>
      <div className="flex justify-center ">
        {Component && <Component key={id} />}
        {img && (
          <img
            src={`${img}`}
            alt="img"
            className="h-auto rounded-lg w-2/3 mt-6 hover:scale-105 transition ease-in-out delay-300"
          />
        )}
      </div>
      <p className="my-8 text-justify">{entrance2}</p>
      <div className="flex justify-center">
        {img2 && (
          <img
            src={`${img2}`}
            alt="img"
            className="h-auto rounded-lg w-2/3 mt-6 hover:scale-105 transition ease-in-out delay-300"
          />
        )}
      </div>
      <CodeBlock code={code} theme={themes.nightOwl} language="js">
        <CodeBlock.Code className="bg-code p-6 rounded-2xl shadow-lg text-xs text-wrap my-8">
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>
      <p className="my-8 text-justify">{entrance3}</p>
      <div className="flex justify-center ">
        <div className="flex justify-center">
          {img3 && (
            <img
              src={`${img3}`}
              alt="img"
              className="h-auto rounded-lg w-2/3 mt-6 hover:scale-105 transition ease-in-out delay-300"
            />
          )}
        </div>
        {Component2 && <Component2 key={id} />}
      </div>
      <CodeBlock code={code2} theme={themes.nightOwl} language="js">
        <CodeBlock.Code className="bg-code p-6 rounded-2xl shadow-lg text-xs text-wrap my-8">
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>
      <p className="my-8 text-justify">{entrance4}</p>
      {url && (
        <button
          className="flex pl-1 w-2/3 md:w-[35%] p-2 bg-white  dark:bg-hover rounded-lg  transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 mx-auto justify-center"
          onClick={() => window.open([url])}
        >
          Navigate to WEB
        </button>
      )}
    </motion.div>
  );
}

export default CraftPost;
