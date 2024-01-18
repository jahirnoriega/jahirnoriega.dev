/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
function Index() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-midnight dark:text-whiter mt-12"
    >
      <h1 className="text-5xl font-extrabold my-3">Jahir Noriega.</h1>
      <p className="text-sm my-3">I write code.</p>
      <img
        src="../img/me-O1.jpeg"
        alt="JAHIR"
        loading="lazy"
        className="w-48 rounded-full my-3"
      />
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
