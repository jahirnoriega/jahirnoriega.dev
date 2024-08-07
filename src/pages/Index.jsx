/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion } from "framer-motion";
import me from "../img/me-O1.webp";
import Spinner from "../components/Spinner";
function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-midnight dark:text-whiter mt-12"
    >
      <h1 className="text-4xl font-bold my-3">Jahir Noriega.</h1>
      <p className="text-sm my-3">I write code.</p>
      <div className="flex items-center">
        <div className="flex justify-center">{isLoading && <Spinner />}</div>
        <img
          src={me}
          alt="JAHIR"
          loading="lazy"
          className={`w-48 rounded-3xl my-3`}
          onLoad={handleImageLoad}
        />
      </div>

      <p className="text-sm my-4">
        My name is Jahir Noriega, and I've been learning software development
        since high school. I am currently studying at Universidad Tecnológica de
        Chihuahua. I just received my associate's degree in IT, and I'm still
        pursuing my college education to obtain my engineering degree.
      </p>
      <div className="text-sm my-3 flex justify-between">
        <p className="w-2/5 md:w-1/3">
          Highly skilled and eager to learn in work.
        </p>
        <p className=" w-2/5 md:w-1/3">
          Over 4 years learning different development languages
        </p>
      </div>
    </motion.div>
  );
}

export default Index;
