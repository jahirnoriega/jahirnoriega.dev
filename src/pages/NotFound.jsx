import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import notfound from "../img/404.png";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center align-baseline"
      >
        <img
          src={notfound}
          alt="404"
          className="w-[60%] dark:invert"
          loading="lazy"
        />
      </motion.div>
      <div className="flex justify-center align-baseline ">
        <button
          className="text-whiter p-2 bg-midnight dark:text-midnight dark:bg-white rounded-lg transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 "
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </>
  );
}

export default NotFound;
