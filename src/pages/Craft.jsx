import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { blog } from "../data/craft_blog";
import { CraftCard } from "../components/CraftCard";

export function loader() {
  return blog;
}

function Craft() {
  const craft_data = useLoaderData();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-midnight dark:text-whiter mt-12"
      >
        <h1 className="text-3xl font-bold my-3">Craft.</h1>
        <p className="text-sm my-3">
          Here are some of the things I’ve been working on. I plan to use this
          page to showcase the experiments I’m conducting and to display
          elements I intend to create and integrate into new projects.
        </p>

        <div className="">
          {craft_data.map((data) => (
            <CraftCard key={data.id} data={data} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Craft;
