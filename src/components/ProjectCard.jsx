import { Link } from "react-router-dom";

export function ProjectCard(data) {
  const { id, projectName, sm_desc, cover } = data.data;
  return (
    <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 my-8 hover:opacity-100  dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-white ">
      <Link to={`/projects/project?id=${id}`}>
        <div className="md:flex mb-3 rounded">
          <img
            src={cover[0]}
            alt={projectName}
            loading="lazy"
            className="md:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="px-2">
            <h4 className="text-2xl font-extrabold my-2">{projectName}</h4>
            <p className="text-sm my-3">{sm_desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
