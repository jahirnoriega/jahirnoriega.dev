import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";
import { useState } from "react";
import Spinner from "../components/Spinner";

function ProjectInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const projectsData = useLoaderData();
  const paramURL = new URLSearchParams(window.location.search);
  const id = parseInt(paramURL.get("id"));
  const projectInfo = projectsData.filter((project) => project.id === id);
  const { projectName, lg_desc, url, cover } = projectInfo[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=" dark:text-whiter text-midnight "
    >
      <h1 className="mt-9 mb-3 text-3xl font-bold ali">{projectName}</h1>

      <div className="h-72 sm:h-86 xl:h-96 2xl:h-96">
        <Carousel>
          {cover.map((img) => (
            <div className="flex justify-center items-center">
              {isLoading && <Spinner />}
              <img
                src={img}
                alt={projectName}
                key={img}
                className="object-cover h-full"
                onLoad={handleImageLoad}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <p className="text-sm my-10 text-justify">{lg_desc}</p>
      <button
        className="flex pl-1 w-2/3 md:w-[35%] p-2 bg-white  dark:bg-hover rounded-lg  transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 mx-auto justify-center"
        onClick={() => window.open([url])}
      >
        Navigate to WEB
      </button>
    </motion.div>
  );
}

export default ProjectInfo;
