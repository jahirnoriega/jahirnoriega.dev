import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "./Spinner";

export function CraftCard(data) {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const { id, title, desc, cover } = data.data;
  return (
    <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 my-8 hover:opacity-100  dark:hover:bg-hover rounded-lg hover:bg-white ">
      <Link to={`/craft/post?id=${id}`}>
        <div className="md:flex mb-3 rounded p-2">
          <div className="md:w-1/4 flex justify-center items-center">
            {isLoading && <Spinner />}
            <img
              src={cover}
              loading="lazy"
              className=" h-full object-cover rounded-lg"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="md:w-2/3 px-2 ">
            <h4 className="text-xl font-extrabold my-2">{title}</h4>
            <p className="text-sm my-2">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CraftCard;
