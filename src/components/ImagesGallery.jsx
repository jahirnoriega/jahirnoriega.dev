import { motion } from "framer-motion";

import me from "../img/personal/me.webp";
import me_baby from "../img/personal/baby.webp";
import top from "../img/personal/top.webp";
import eyes from "../img/personal/eyes.webp";

function ImagesGallery() {
  return (
    <div className="flex justify-center">
      <motion.img
        initial={{ rotate: -7 }}
        whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
        transition={{ duration: 0.5 }}
        src={me}
        className="rounded-2xl mb-9 max-w-xs object-cover h-56"
        loading="lazy"
      />
      <motion.img
        initial={{ rotate: 7 }}
        whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
        transition={{ duration: 0.5 }}
        src={top}
        className="rounded-2xl mb-9 max-w-xs object-cover h-56 "
        loading="lazy"
      />
      <motion.img
        initial={{ rotate: -7 }}
        whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
        transition={{ duration: 0.5 }}
        src={me_baby}
        className="rounded-2xl mb-9 max-w-xs object-cover h-56 "
        loading="lazy"
      />
      <motion.img
        initial={{ rotate: 7 }}
        whileHover={{ rotate: 0, scale: 1.2, zIndex: 3 }}
        transition={{ duration: 0.5 }}
        src={eyes}
        className="rounded-2xl mb-9 max-w-xs object-cover h-56 "
        loading="lazy"
      />
    </div>
  );
}

export default ImagesGallery;
