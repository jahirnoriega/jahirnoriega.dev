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
    desc,
    entrance,
    entrance2,
    entrance3,
    entrance4,
    component: Component,
    component2: Component2,
    code,
    code2,
    cover,
  } = postInfo[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=" dark:text-whiter text-midnight text-sm"
    >
      <h1 className="mt-9 mb-3 text-3xl font-bold ali">{title}</h1>
      <p className="mt-10 text-justify">{entrance}</p>
      <div className="flex justify-center ">
        {Component && <Component key={id} />}
      </div>
      <p className="my-8 text-justify">{entrance2}</p>
      <CodeBlock code={code} theme={themes.nightOwl} language="js">
        <CodeBlock.Code className="bg-code p-6 rounded-2xl shadow-lg text-xs text-wrap my-8">
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>
      <p className="my-8 text-justify">{entrance3}</p>
      <div className="flex justify-center ">
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
    </motion.div>
  );
}

export default CraftPost;
