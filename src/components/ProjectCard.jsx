import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "./Spinner";

export function ProjectCard(data) {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const { id, projectName, sm_desc, cover } = data.data;
  return (
    <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 my-8 hover:opacity-100  dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-white ">
      <Link to={`/projects/project?id=${id}`}>
        <div className="md:flex mb-3 rounded">
          <div className="md:w-1/3 flex justify-center items-center">
            {isLoading && <Spinner />}
            <img
              src={cover[0]}
              alt={projectName}
              loading="lazy"
              className=" h-full object-cover rounded-lg"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="md:w-2/3 px-2">
            <h4 className="text-2xl font-extrabold my-2">{projectName}</h4>
            <p className="text-sm my-3">{sm_desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
