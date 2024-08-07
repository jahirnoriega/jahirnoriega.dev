import { motion } from "framer-motion";
import me from "../img/personal/me.webp";
import me_baby from "../img/personal/baby.webp";
import top from "../img/personal/top.webp";
import eyes from "../img/personal/eyes.webp";
import Spinner from "./Spinner";
import { useState } from "react";

function ImagesGallery() {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center">
      <div className="rounded-2xl mb-9 max-w-xs object-cover h-48 flex justify-center items-center">
        {isLoading && <Spinner />}

        <motion.img
          initial={{ rotate: 7 }}
          whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
          transition={{ duration: 0.5 }}
          src={me}
          className="rounded-2xl mb-9 max-w-xs object-cover h-48 "
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <motion.img
          initial={{ rotate: -7 }}
          whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
          transition={{ duration: 0.5 }}
          src={me_baby}
          className="rounded-2xl mb-9 max-w-xs object-cover h-48 "
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <motion.img
          initial={{ rotate: 7 }}
          whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
          transition={{ duration: 0.5 }}
          src={eyes}
          className="hidden sm:flex rounded-2xl mb-9 max-w-xs object-cover h-48 "
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

export default ImagesGallery;
